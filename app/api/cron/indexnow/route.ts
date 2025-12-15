import { NextResponse } from 'next/server';
import { mainPages, categoryPages, toolPages } from '@/lib/sitemap-config';

export async function GET(request: Request) {
    const allPages = [...mainPages, ...categoryPages, ...toolPages];
    const urlList = allPages.map(page => page.url);

    const body = {
        host: "www.fasttools.store",
        key: "3294d73fd9654aa08ebfd8971f3faf01",
        keyLocation: "https://www.fasttools.store/3294d73fd9654aa08ebfd8971f3faf01.txt",
        urlList: urlList
    };

    try {
        const response = await fetch("https://api.indexnow.org/IndexNow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("IndexNow Submission Failed:", errorText);
            return NextResponse.json({
                error: "Failed to submit to IndexNow",
                details: errorText,
                status: response.status
            }, { status: response.status });
        }

        return NextResponse.json({
            success: true,
            message: `Successfully submitted ${urlList.length} URLs to IndexNow`,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error("IndexNow Error:", error);
        return NextResponse.json({
            error: "Internal Server Error",
            details: String(error)
        }, { status: 500 });
    }
}
