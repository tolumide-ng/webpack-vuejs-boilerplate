const webpackMerge = require('webpack-merge');
const commonWebpackConfig = require('./config/webpack.common');
const developWebpackConfig = require('./config/webpack.development');

module.exports = (env) => {
  const envConfig = !env.mode ? developWebpackConfig : require(`./config/webpack.${env.mode}`);

  return webpackMerge({ mode: env.mode }, commonWebpackConfig, envConfig);
};
