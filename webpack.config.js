//entry point is and where the output is

const path = require('path');

module.exports = {
    entry: './public/src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    //this automatically has babel processing our JSX in any .js file
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //only use files that end in .js
            exclude: /node_modules/ //excludes our node modules
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    //this shows us in the console where our errors and console.logs are
    devtool: 'cheap-module-eval-source-map',

    //set up the webpack server so we do not need live-server anymore
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

