var path = require('path');

module.exports = {
    path: path.resolve(__dirname),
    rootPath: path.resolve(__dirname),
    testEntryPoint: path.join(__dirname, 'test', 'index.jsx'),
    webpackConfig: {
        debug: require('./webpack.config.js'),
        production: require('./webpack.config.prod.js'),
    },
    serverOverrides: function(app, express) {
        app.use('/dist/', express.static(path.join(__dirname, 'dist')));
        app.get('/api/', function(req, res) {
            res.send('OK');
        });
    }
};
