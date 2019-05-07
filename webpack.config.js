const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const PUBLIC_DIR = 'public'

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, PUBLIC_DIR),
        hot: true,
        port: 3350
    },
    entry: path.resolve(__dirname, 'src', 'main.imba'),
    mode: 'development',
    module: {
        rules: [
            {
                loader: 'imba/loader',
                test: /\.imba$/
            },
            {
                exclude: /node_modules/,
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: 'global'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, PUBLIC_DIR, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
		extensions: ['.imba','.js', '.json']
	},
    target: 'web'
}
