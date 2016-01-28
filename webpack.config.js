module.exports = {
    context: __dirname + "/app",
    devtool: 'source-map', // Enable sourcemaps
    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    module: {
        loaders: [
            {
                include: /\.(js|jsx)$/,
                loaders: ["react-hot", "babel"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },

    resolve: {
		modulesDirectories: [
			"src",
			"node_modules",
			"web_modules"
		],
		extensions: ["", ".json", ".js", ".jsx"]
	},
}
