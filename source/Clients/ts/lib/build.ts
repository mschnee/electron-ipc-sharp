import * as webpack from 'webpack';

const files = [
    'RestClient',
    'RestWorkerClient',
    //'RestWorkerClientWorker'
];

files.forEach(fileName => {
    const config = {
        // entry: {
        //     RestClient: 'RestClient.ts',
        //     RestWorkerClient: 'RestWorkerClient.ts',
        // },
        entry: `./${fileName}.ts`,
        output: {
            path: './dist',
            filename: `./${fileName}.js`
        },
        resolve: {
            extensions: ['', '.ts', '.tsx', '.js']
        },
        module: {
            loaders: [
                {test: /\.ts$/, loader: 'ts-loader'}
            ]
        },
        // there is no UglifyJS for ES6 yet
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin()
        // ]
    }
    const compiler = webpack(<any>config);
    compiler.run((err, stats) => {
        console.log(err);
        console.log(stats.toString());
    });
});
