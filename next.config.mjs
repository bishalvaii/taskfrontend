/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/dashboard',
            destination: '/login',
            permanent: false,
            has: [
              {
                type: 'cookie',
                key: 'token',
                value: '',
              },
            ],
          },
        ];
      },
  };
  
  export default nextConfig;
  