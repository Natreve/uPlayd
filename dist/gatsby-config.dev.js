"use strict";

require("dotenv").config({
  path: ".env"
});

module.exports = {
  siteMetadata: {
    title: "uPlayed",
    description: "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs"
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", "gatsby-plugin-sass", {
    resolve: "gatsby-plugin-firebase",
    options: {
      credentials: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
      }
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.

    }
  }, // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  {
    resolve: "gatsby-plugin-prefetch-google-fonts",
    options: {
      fonts: [{
        family: "Roboto Mono",
        variants: ["400", "700"]
      }, {
        family: "Roboto",
        subsets: ["latin"]
      }]
    }
  }]
};