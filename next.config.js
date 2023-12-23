const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['cdn.sanity.io'],
    },
    async rewrites() {
        return [
          {
            source: '/sitemap.xml',
            destination: '/api/sitemap',
          },
        ];
      },
    
};

module.exports = withNextIntl(nextConfig);
