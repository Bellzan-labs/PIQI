/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "piqigroup.com"
      }
    ]
  }
};

export default nextConfig;
