const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = function(envVars) {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}`);
 
    const config = merge(commonConfig, envConfig);
    return config
}