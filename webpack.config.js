const path = require("path");
const webpack = require("webpack");

const config = {
    entry: {
        main: path.resolve(__dirname, "./index"),
        vendor: ["preact"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ["ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: "Infinity"
        })
    ]
};

if (process.env.NODE_ENV === "production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    );
} else {
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    );

    config.devtool = "cheap-module-source-map";
}

module.exports = config;
