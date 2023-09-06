const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "resolve": {
        "extensions": [".tsx", ".ts", ".jsx", ".js"],
    },
    "entry": path.resolve(__dirname, "./src/main.tsx"),
    "output": {
        path: path.resolve(__dirname, "./build"),
        "filename": "bundle.js"
    },
    "mode": "development",
    "module": {
        "rules": [
            {
                test: /\.(ts|js)x?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
        })
    ]
}