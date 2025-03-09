// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js','jsx','ts','tsx','md','mdx'],  // allow MDX pages
//   // You can add other Next.js config options here if needed
// };

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });
// module.exports = withMDX(nextConfig);

// next.config.js
// This config sets up Next.js to handle .md and .mdx files using @next/mdx.

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  // You can pass additional MDX options here if needed.
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // We include .md and .mdx in the pageExtensions so Next.js
  // will treat those files as pages.
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // Other Next.js config options can go here.
};

module.exports = withMDX(nextConfig);
