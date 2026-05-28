/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // fully static site -> emit an `out/` folder that any host (Netlify,
  // Vercel, or an offline zip) can serve directly.
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
