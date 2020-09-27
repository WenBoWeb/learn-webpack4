var path = require("path");
// webpack4中css分离打包用mini-css-extract-plugin
// webpack3中用 extract-text-webpack-plugin
const MiniExtractTextPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/main.js',
    context: path.resolve(__dirname, '../'),
    output: {
        path: path.resolve(__dirname + "/../dist"),
        // path: path.resolve(__dirname + "/../", "dist"), //出口目录，绝对路径
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader',MiniExtractTextPlugin.loader,'css-loader'],
            }
        ]
    },
    plugins: [
        // 
        new MiniExtractTextPlugin({
            filename: `./css/[name]_[contenthash:8].css`
        })
    ]
}