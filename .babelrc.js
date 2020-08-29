const env = require("./env-config");

module.exports = {
  plugins: [
    ["transform-define", env],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          styles: "./styles",
        },
        cwd: "babelrc",
      },
    ],
    [
      "wrap-in-js",
      {
        extensions: ["css$", "scss$"],
      },
    ],
  ],
  presets: ["next/babel"],
  ignore: [],
};
