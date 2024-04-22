/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**/**',
            },
            {
                protocol: 'https',
                hostname: 'www.amazon.com',
                port: '',
                pathname: '**/**',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname: '**/**',
            },
        ],
    },
};

export default nextConfig;
