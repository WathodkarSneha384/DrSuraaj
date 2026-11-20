import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to /out
// that can be uploaded to any host (Hostinger, GoDaddy, cPanel, Netlify, Vercel...).
// Remove `output: "export"` if you deploy on Vercel/Node and want server features.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // keeps URLs like /wellness/ and /blog/
  images: { unoptimized: true }, // required for static export
};

export default nextConfig;
