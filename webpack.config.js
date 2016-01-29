var path = require("path");

module.exports = {
    context: path.join(__dirname, "app"),
    devtool: 'source-map', // Enable sourcemaps
    entry: {
        javascript: path.join(__dirname, "app/app.js"),
        html: path.join(__dirname, "app/index.html"),
    },

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
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
