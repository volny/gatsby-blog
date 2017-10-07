module.exports = {
  siteMetadata: {
    siteUrl: `https://felixvolny.com`,
    footer: {
      annoying: false,
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Web and Mobile Application Development Blog by Felix Volny",
        short_name: "Felix Volny",
        start_url: "/",
        background_color: "#d8d8d8",
        theme_color: "#2980b9",
        display: "minimal-ui",
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // Offline Plugin wants to read manifest.json, so it needs to come after gatsby-plugin-manifest
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-104116574-1',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styling/typography`,
      },
    },
  ],
}
