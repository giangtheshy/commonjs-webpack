module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        type: "asset",

        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
        // loader: "file-loader",
        // options: {
        //   name: "[name].[hash].[ext]",
        //   outputPath: "images",
        // },
      },
    ],
  },
};
