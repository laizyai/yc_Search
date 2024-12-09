/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        domains: ['localhost'],
    },
    metadata: {
        metadataBase: new URL('https://your-domain.com'),
        title: 'CaseQuery AI – Instant Supreme Court Insights',
        description: 'Ask questions about any supreme court case and get key holdings, dissenting opinions, and precedents',
    }
};

export default nextConfig;
