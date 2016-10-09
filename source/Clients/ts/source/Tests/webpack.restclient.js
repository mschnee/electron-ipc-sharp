const webpack = require('webpack');
const path = require('path');

module.exports = {
    cache: true,
    devtool: 'source-map',
    context: __dirname,
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'babel-loader!ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    entry: {
        app: './app.ts',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ]
}