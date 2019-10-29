module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "env": {
      "test": {
        "plugins": [
          ["babel-plugin-webpack-alias-7", { "config": "./build_config/webpack.common.js" }],
          "istanbul",
          "dynamic-import-node",
          "@babel/plugin-proposal-object-rest-spread"
        ]
      },
      "production": {
        "plugins": ["transform-react-remove-prop-types", ["recharts"]]
      }
    }
  };
};
