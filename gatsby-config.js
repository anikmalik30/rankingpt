// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// module.exports = {
//   siteMetadata: {
//     title: `Mibix - Gatsby React Technology & Digital Services Template`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@envy_theme`,
//     siteUrl: `https://www.rankingpt.com`, // Add the siteUrl property here
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-gtag`,
//       options: {
//         trackingIds: [
//           "G-9F4FZ6ZXVX", // Replace with your Google Analytics Measurement ID
//         ],
//         gtagConfig: {
//           anonymize_ip: true,
//           cookie_expires: 3600,
//         },
//         pluginConfig: {
//           head: true,
//           respectDNT: true,
//           exclude: ["/preview/**", "/do-not-track/me/too/"],
//         },
//       },
//     },
//     {
//       resolve: `gatsby-plugin-clarity`,
//       options: {
//         clarity_project_id: "okmhvj9kw0", // Replace with your Microsoft Clarity Project ID
//         enable_on_dev_env: true,
//       },
//     },
//     `gatsby-plugin-sitemap`, // Add the sitemap plugin here
//     {
//       resolve: `gatsby-plugin-react-i18next`,
//       options: {
//         localeJsonSourceName: `locale`, // Name of directory that contains your translations
//         languages: [`en`, `fr`], // Define the languages you want to support
//         defaultLanguage: `en`,   // Set the default language
//         siteUrl: `http://localhost:8000`, // Replace with your site URL

//         // Configure the translation paths
//         i18nextOptions: {
//           ns: ["translation"],
//           defaultNS: "translation",
//           fallbackLng: "en",
//           // interpolation: {
//           //   escapeValue: false, // React already does escaping
//           // },
//         },
//         useLocalStorage: false,
//         redirect: false, // Disable automatic redirects based on language
//       },
//     },
//     {
//       resolve: 'gatsby-source-sanity',
//       options: {
//         projectId: process.env.GATSBY_SANITY_PROJECT_ID, // Replace with your Sanity project ID
//         dataset: 'production', // Or your specific dataset name
//         token: process.env.SANITY_READ_TOKEN, // Optional for private datasets
//         watchMode: true, // Enable watch mode to get live updates in development
//         overlayDrafts: true, // Overlay drafts when authenticated
//       },
//     },
//     'gatsby-plugin-image',
//     {
//       resolve: 'gatsby-plugin-react-svg', //for svg
//       options: {
//         rule: {
//           include: /assets\/icons\/svg/, // Adjust this path as needed
//         },
//       },
//     },

//   ],
// };

