//entry point is and where the output is

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log('env', env);

    return {
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
                use: CSSExtract.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }


                    ]
                })
            }]
        },
        plugins: [
          CSSExtract
        ],

        //this shows us in the console where our errors and console.logs are
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        //set up the webpack server so we do not need live-server anymore
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};

