"use strict";

const logger = require('morgan'),
    busboyBodyParser = require('busboy-body-parser'),
    bodyParser = require('body-parser'),
    Routes = require('../app_modules/app-routes');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });

    //SET UP MIDDLEWARE 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(busboyBodyParser({ limit: '10mb' }));

    //[*]Routes Configuration
    // let main = require('../routes/video-streams');
    Routes('/users', app);
    //app.use('/users', main);
};