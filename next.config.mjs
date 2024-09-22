/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-west-2.graphassets.com", // Your domain
        port: "", // Leave empty unless you have a specific port
        pathname: "/**", // Matches any path under the domain
      },
    ],
  },
};

export default nextConfig;
