/** @type {import('next').NextConfig} */ 

const withImages = require("next-images");

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withImages({   fileExtensions: ['mp3'],
  esModule: false, // Configure esModule to be false
  ...nextConfig, // Mesclar com as configurações existentes
});