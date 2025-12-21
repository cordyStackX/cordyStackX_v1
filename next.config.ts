/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.svgrepo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
      { protocol: 'https', hostname: 'wagmi.sh', pathname: '/**' },
      { protocol: 'https', hostname: 'icon.icepanel.io', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ipfs.io', pathname: '/**' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
