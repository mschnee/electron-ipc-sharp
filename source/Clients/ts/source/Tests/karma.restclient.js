var webpackConfig = require('./webpack.restclient.js');
var tsConfig = require('./tsconfig.json');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            {pattern: 'tests/**/*.ts'},
        ],
        exclude: [],
        preprocessors: {
            'tests/**/*.ts': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    });
}
