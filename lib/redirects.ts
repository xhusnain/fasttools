export const permanentRedirects = [
  {
    source: "/blog",
    destination: "/",
    permanent: true,
  },
  {
    source: "/blog/:slug*",
    destination: "/",
    permanent: true,
  },
  {
    source: "/guides",
    destination: "/",
    permanent: true,
  },
  {
    source: "/guides/:slug*",
    destination: "/",
    permanent: true,
  },
  {
    source: "/tutorials/:slug*",
    destination: "/",
    permanent: true,
  },
  {
    source: "/converters/currency-api",
    destination: "/converters/currency",
    permanent: true,
  },
  {
    source: "/social-media-tools/instagram-dp/private-downloader",
    destination: "/social-media-tools/instagram-dp/private-account",
    permanent: true,
  },
]
