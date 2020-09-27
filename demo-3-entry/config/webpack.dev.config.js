var path = require("path");
const MiniExtractTextPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname + "/../dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', MiniExtractTextPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        // 
        new MiniExtractTextPlugin({
            filename: `./css/[name]_[contenthash:8].css`
        })
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, '..', './'),
        publicPath: '/',
        https: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    }
}