var path = require('path');

module.exports = {
	entry: './src/main/frontend/App.js',
	devtool: 'eval-source-map',
	cache: true,
	mode: 'development',
	output: {
		path: __dirname,
		filename: './src/main/resources/static/built/bundle.js'
	},
	module: {
		rules: [
			{
				test: path.join(__dirname, '.'),
				exclude: [/(node_modules)/,  /\.eot$/,  /\.ttf$/,  /\.woff$/,  /\.woff2$/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}]
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				// Creates `style` nodes from JS strings
				"style-loader",
				// Translates CSS into CommonJS
				"css-loader",
				// Compiles Sass to CSS
				"sass-loader",
				],
			},
			{
				test: /\.(jpg|png)$/,
				use: ['url-loader'],
			}
		]
	}
};