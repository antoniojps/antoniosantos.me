/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/tdw-02",
        destination: "/notes/tdw-02",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
