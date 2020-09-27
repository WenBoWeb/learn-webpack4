var path = require("path");
// webpack4中css分离打包用mini-css-extract-plugin
// webpack3中用 extract-text-webpack-plugin
const MiniExtractTextPlugin = require('mini-css-extract-plugin')
module.exports = {
    // entry: './src/main.js', // 这种也不用讲了会打包出来一个文件。
    // entry: ['./src/main.js', './src/main2.js'], //这种写法会打包出来第一个文件。
    entry: {
        main: ["./src/main.js"],  //入口文件,
        main1: ["./src/main2.js"],  //常驻后台入口文件,
    }, // 这种对象的写法会打包错出来两个文件。
    context: path.resolve(__dirname, '../'),
    output: {
        path: path.resolve(__dirname + "/../", "dist"), //出口目录，绝对路径
        // filename: 'js/[name].js',x
        // path: path.resolve(__dirname + "/../", "dist"), //出口目录，绝对路径
        filename: "[name].js"
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