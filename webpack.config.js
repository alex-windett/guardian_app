const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const sassLoaders = [
    'css-loader',
    'postcss-loader',
    'style',
    'css',
    'sass',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './build'),
        publicPath: './build'
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['./src', 'node_modules', './bower_components'],
        extensions: ['', '.js', '.scss', '.sass'],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!sass'
                )
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname), path.resolve(__dirname, './src'),
            path.join(__dirname, 'node_modules'),
        ]
    },
    devtool: "source-map",
    watch: true,
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ]
}

module.exports = config
