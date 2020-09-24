const withFonts = require("next-fonts");

module.exports = withFonts({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                  removeTitle: false,
                  convertShapeToPath: false,
                  mergePaths: false,
                },
              ],
            },
          },
        },
        "url-loader",
      ],
    });

    return config;
  },
});
