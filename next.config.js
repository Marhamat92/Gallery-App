const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  // publicRuntimeConfig: {
  //   backendUrl: process.env.NEXT_PUBLIC_IMAGE_URL,
  // },
  // async rewrites() { dile göre url değiştirmek için
  //   return [
  //     {
  //       source: '/tr/hakkimizda/sirket-profili',
  //       destination: '/tr/about-us/company-profile',
  //       locale: false,
  //     },
  //     {
  //       source: '/en/about-us/company-profile',
  //       destination: '/en/about-us/company-profile',
  //       locale: false,
  //     },
     
  //   ];
  // },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,

};
