const express = require('express');

let app = express();

let config = require('./config/config'),
    mongooseconfig = require('./config/mongoose.config')(config),
    expressconfig = require('./config/express.config')(app),
    authconfig = require('./config/auth.config');

app.listen(config.dev.port, () => {
    //console.log(process.env.node_env)
    console.log(`application invoked at port : ${config.dev.port}`)
});