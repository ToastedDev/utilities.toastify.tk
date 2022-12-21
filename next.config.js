/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/oauth2/authorize?client_id=1054359549219459133&permissions=1099914307614&scope=bot%20applications.commands",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
