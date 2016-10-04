module.exports = {
    context: __dirname,
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    entry: '../RestClient/index.ts',
    output: {
        path: './dist',
        filename: 'RestClient.js'
    }
}