const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
	//entry: './src/index.js',
	entry: {
		//app: './src/index.js',
		//print: './src/print.js'
		index: './src/index.js'
		//another: './src/another-module.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		//new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Code Splitting'
		//}),
		})
		//new webpack.NamedModulesPlugin(),
		//new webpack.HotModuleReplacementPlugin()
		//new webpack.optimize.CommonsChunkPlugin({
		//	name: 'common'
		//})
	],
	output: {
		//filename: 'bundle.js',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};