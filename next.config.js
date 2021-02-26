const { redirect } = require('next/dist/next-server/server/api-utils');

module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
