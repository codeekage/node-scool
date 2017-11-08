 const flash = require('connect-flash'),
     session = require('express-session'),
     passport = require('passport'),
     LocalStrategy = require('passport-local').Strategy;

 module.exports = (app) => {

     // Express Session
     app.use(session({
         secret: 'secret',
         saveUninitialized: true,
         resave: true
     }));

     // Passport init
     app.use(passport.initialize());
     app.use(passport.session());

     // Express Validator
     app.use(expressValidator({
         errorFormatter: function(param, msg, value) {
             var namespace = param.split('.'),
                 root = namespace.shift(),
                 formParam = root;

             while (namespace.length) {
                 formParam += '[' + namespace.shift() + ']';
             }
             return {
                 param: formParam,
                 msg: msg,
                 value: value
             };
         }
     }));

     // Connect Flash
     app.use(flash());

     // Global Vars
     app.use(function(req, res, next) {
         res.locals.success_msg = req.flash('success_msg');
         res.locals.error_msg = req.flash('error_msg');
         res.locals.error = req.flash('error');
         res.locals.user = req.user || null;
         next();
     });
 }