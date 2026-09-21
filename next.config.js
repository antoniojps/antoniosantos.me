/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/tdw-02",
        destination:
          "https://docs.google.com/document/d/1k-E6nEgFC7x0uEEBHS5NA4o34njF1px7/edit?usp=sharing&ouid=103011433578771485622&rtpof=true&sd=true",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
