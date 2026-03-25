import { NextRequest, NextResponse } from "next/server";
import http from "http";
import tls from "tls";
import { PROXY_LIST } from "@/lib/proxies";

function getRandomProxy() {
  const proxyStr = PROXY_LIST[Math.floor(Math.random() * PROXY_LIST.length)];
  const [host, port, user, password] = proxyStr.split(":");
  return { host, port: parseInt(port, 10), user, password };
}

/**
 * Fetch image through proxy (for Cloud Run datacenter IPs that get blocked by Instagram CDN).
 */
function fetchImageViaProxy(imageUrl: string): Promise<{ status: number; buffer: Buffer; contentType: string }> {
  const parsed = new URL(imageUrl);
  return new Promise((resolve, reject) => {
    const proxy = getRandomProxy();
    const auth = Buffer.from(`${proxy.user}:${proxy.password}`).toString("base64");

    const connectReq = http.request({
      host: proxy.host,
      port: proxy.port,
      method: "CONNECT",
      path: `${parsed.hostname}:443`,
      headers: {
        Host: `${parsed.hostname}:443`,
        "Proxy-Authorization": `Basic ${auth}`,
      },
      timeout: 10000,
    });

    connectReq.on("connect", (_res, socket) => {
      const tlsSocket = tls.connect(
        { host: parsed.hostname, socket, servername: parsed.hostname },
        () => {
          const reqPath = parsed.pathname + parsed.search;
          const reqData = [
            `GET ${reqPath} HTTP/1.1`,
            `Host: ${parsed.hostname}`,
            `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36`,
            `Referer: https://www.instagram.com/`,
            `Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8`,
            `Connection: close`,
            ``, ``
          ].join("\r\n");

          tlsSocket.write(reqData);

          const chunks: Buffer[] = [];
          tlsSocket.on("data", (chunk: Buffer) => chunks.push(chunk));
          tlsSocket.on("end", () => {
            tlsSocket.destroy();
            const raw = Buffer.concat(chunks);
            // Find header/body separator
            const separator = Buffer.from("\r\n\r\n");
            let sepIdx = -1;
            for (let i = 0; i <= raw.length - 4; i++) {
              if (raw[i] === 0x0d && raw[i+1] === 0x0a && raw[i+2] === 0x0d && raw[i+3] === 0x0a) {
                sepIdx = i;
                break;
              }
            }
            if (sepIdx === -1) {
              reject(new Error("Invalid HTTP response"));
              return;
            }
            const headerStr = raw.subarray(0, sepIdx).toString();
            const body = raw.subarray(sepIdx + 4);
            const statusMatch = headerStr.match(/HTTP\/\d\.\d (\d+)/);
            const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;
            const ctMatch = headerStr.match(/Content-Type:\s*(.+)/i);
            const contentType = ctMatch ? ctMatch[1].trim() : "image/jpeg";

            resolve({ status, buffer: body, contentType });
          });
          tlsSocket.on("error", (err) => { tlsSocket.destroy(); reject(err); });
        }
      );
      tlsSocket.on("error", (err) => { socket.destroy(); reject(err); });
    });

    connectReq.on("error", reject);
    connectReq.on("timeout", () => { connectReq.destroy(); reject(new Error("Proxy timeout")); });
    connectReq.end();
  });
}

/**
 * Fetch image directly (works from non-datacenter IPs).
 */
async function fetchImageDirect(imageUrl: string): Promise<{ status: number; buffer: Buffer; contentType: string }> {
  const response = await fetch(imageUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      Referer: "https://www.instagram.com/",
    },
  });
  const contentType = response.headers.get("content-type") || "image/jpeg";
  const buffer = Buffer.from(await response.arrayBuffer());
  return { status: response.status, buffer, contentType };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  // Only allow Instagram CDN URLs
  if (
    !imageUrl.startsWith("https://scontent") &&
    !imageUrl.startsWith("https://instagram")
  ) {
    return NextResponse.json({ error: "Invalid image URL" }, { status: 400 });
  }

  // Try direct first, fallback to proxy
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const useProxy = attempt > 1;
      const { status, buffer, contentType } = useProxy
        ? await fetchImageViaProxy(imageUrl)
        : await fetchImageDirect(imageUrl);

      if (status === 200 && buffer.length > 100) {
        return new NextResponse(new Uint8Array(buffer) as any, {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400",
          },
        });
      }

      // If direct failed (403/blocked), try proxy next
      if (!useProxy) continue;
    } catch {
      if (attempt < 3) continue;
    }
  }

  return NextResponse.json({ error: "Failed to proxy image" }, { status: 500 });
}
