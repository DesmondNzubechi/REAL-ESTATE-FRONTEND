/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.freepik.com', 'img.freepik.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp']
 }
};

export default nextConfig;
