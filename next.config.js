/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'pixabay.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com'
    ]
  }
}

module.exports = nextConfig
