/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        domains: ['localhost'],
    },
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        ASSISTANT_ID: process.env.ASSISTANT_ID,
    },
};

// Debug log during build/startup
console.log('API Key available:', !!process.env.OPENAI_API_KEY);
console.log('Assistant ID:', process.env.ASSISTANT_ID);

export default nextConfig;
