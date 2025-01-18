/** @type{import('next').NextConfig} */

const nextConfig= {
  transpilePackages: ['your-package-name'],
  /* config options here */
  webpack:(config, { isServer } ) =>{
    //Add a rule to handle the canvas.node binary module
    config.module.rules.push({test:/\.node$/, use:'raw-loader'})
    
    //Exclude canvas form being processed by Next.js in the browser
    if(!isServer) config.externals.push('canvas');
    return config;
  } 
};

module.exports = nextConfig;
