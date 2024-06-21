/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "w7.pngwing.com",
      "seeklogo.com",
      "i.ibb.co",
      "upload.wikimedia.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "img/**",
      },
    ],
  },
};

export default nextConfig;
