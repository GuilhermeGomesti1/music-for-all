/** @type {import('next').NextConfig} */ 
const withImages = require("next-images");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: "./", // Defina o caminho para arquivos estáticos
  fileExtensions: ['mp3'], // Inclua a extensão MP3
  esModule: false, // Configure esModule para ser false
};

module.exports = withImages({
  ...nextConfig, // Mesclar com as configurações existentes
});