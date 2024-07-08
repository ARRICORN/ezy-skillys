/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "w7.pngwing.com",
      "seeklogo.com",
      "i.ibb.co",
      "upload.wikimedia.org",

      "i.ibb.co",
      "res.cloudinary.com",

      "res.cloudinary.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "zijundeng.github.io",
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
