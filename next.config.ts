import type { NextConfig } from 'next';

// Static export. Five brochure routes, no route handlers, no server actions, no
// dynamic APIs — the deploy target is a directory of files served by nginx.
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  // The Next image optimizer needs a running server; export requires it off.
  images: { unoptimized: true },
  // Emit /about/index.html rather than /about.html so nginx serves the tree
  // with no rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
