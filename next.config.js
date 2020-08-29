const path = require("path");
const glob = require("glob");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/rd2l-content/" : "",
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // // Important: return the modified config
    // return config;
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]",
        },
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              outputStyle: "compressed", // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ["styles", "node_modules"]
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    );
    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    };
  },
};
