var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.resolve(__dirname, 'app'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        publicPath: "app/",
        filename: './bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'ng-annotate!babel?presets[]=es2015' // 'babel-loader' is also a valid name to reference
        }, {
            test: /\.html$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'raw-loader'
        }, {
            test: /\.css$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'style!css'
        }]
    },
    devServer: {
        //contentBase:path.join(__dirname, 'dist') // ceci est juste un exemple, si dist est l'endroit ou on aurait généré les fichiers
        inline: true, // les mises à jour de style ne sont plus affichés instantnément avec cette option donc j'ai ajouté le watch:true et çà marché!!!
        watch: true

    }
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = path.resolve(__dirname, 'dist');
    config.output.publicPath = 'dist/';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
    config.devtool = 'source-map';
}
module.exports = config;
