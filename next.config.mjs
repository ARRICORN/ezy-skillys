/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3-alpha-sig.figma.com', "w7.pngwing.com", "seeklogo.com", "i.ibb.co", "upload.wikimedia.org"],
    },
  images: {
    domains: [
      "i.ibb.co",
      "s3-alpha-sig.figma.com",
      "w7.pngwing.com",
      "seeklogo.com",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
