"use strict";
let mongoose = require('mongoose');

// activating Promises for mongoose
mongoose.Promise = global.Promise;

module.exports = (config) => {
    var dbURI = config.dev.db;

    // using new syntax for mongoose library
    // check the mongoose doc for more info
    mongoose.connect(dbURI, {
        useMongoClient: true,
    }).then(() => {
        console.log(`Connected to ${dbURI}`);
    }).catch((err) => {
        switch (err.name) {
            case 'MongoError':
                console.log(`Please check that server is running your machine ${dbURI}`)
                break;

            default:
                throw e;
                break;
        }
    });
};