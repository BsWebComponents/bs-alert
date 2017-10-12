//webpack and its dependencies
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        "bs-alert": './src/index.js',
        'slim': ['slim-js']
    },
    module: {
        preLoaders: [
            {
                test: /\.json$/, 
                exclude: /node_modules/,
                loader: 'json'
            }
        ],
        loaders:[
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
             test: /\.png$/,
             exclude: /node_modules/,
             loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]", "sass?sourceMap"]
            },
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.tff$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: __dirname + '/test/build',
        publicPath: './',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './test/build',
        port: 8385,
        noInfo: true,
        open: true,
        hot: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './test/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'slim',
        }),
    ]
};
