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
    entry: './tests/RestClient/test.ts',
    output: {
        path: './dist',
        filename: 'RestClient.js'
    }
}