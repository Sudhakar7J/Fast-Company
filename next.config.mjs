/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logowik.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.pngkey.com",
      },
      {
        protocol: "https",
        hostname: "www.pngkit.com",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
