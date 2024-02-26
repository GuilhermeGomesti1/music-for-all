/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.ibb.co"],
  },
  api: {
    bodyParser: {
      bodyParser: false,
    },
  },
};

module.exports = withImages({
  fileExtensions: ["mp3"],
  esModule: false, // Configure esModule to be false
  ...nextConfig, // Mesclar com as configurações existentes
});
