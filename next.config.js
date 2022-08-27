/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const withTM = require("next-transpile-modules")(["three"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = withPlugins([withVanillaExtract, withTM], nextConfig);
