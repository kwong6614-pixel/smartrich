const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kiggla.com',
        pathname: '/assets/img/**'
      }
    ]
  }
};

export default nextConfig;
