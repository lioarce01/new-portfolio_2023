/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.postimg.cc",
				port: "",
				pathname: "/**",
			},
		],
	},
}

module.exports = nextConfig
