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
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            
            },{
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },{
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
        })
    ]
}