module.exports = function(env, argv) {
  return argv.mode === "production"
    ? require("./config/webpack.config.prod")
    : require("./config/webpack.config.dev");
};
