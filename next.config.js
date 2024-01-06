/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	disable: false,
	workboxOptions: {
		disableDevLogs: true,
	},
  });


const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
	  config.resolve.fallback = { fs: false, net: false, tls: false };
	  config.externals.push("pino-pretty", "lokijs", "encoding");
	  return config;
	},
  };
  
  module.exports = withPWA(nextConfig);