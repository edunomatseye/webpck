const { merge } = require('webpack-merge')

module.exports = function(envVars) {
    const { env } = envVars;
    const dev = require('./webpack.dev')
    const prod = require('./webpack.prod')
    const common = require('./webpack.common')

    const config = merge(common, require(`./webpack.${env}`))
    return config
}