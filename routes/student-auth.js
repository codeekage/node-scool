var express = require('express');
var router = express.Router();
var passport = require('../auth/passport-auth');
var Auth = require('../auth/app-auth')


router.get('std/login', function(req, res) {
    res.send({ status: "Logged In" });
});

router.get('/std/register', function(req, res) {
    res.send({ status: "it seems like you re not registered" });
});

//Register Student
router.post('/std/register', function(req, res, next) {
    Auth.registerStudent(req, res)
});

//Student Login
router.post('/std/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/std/register', failureFlash: true, successFlash: true }),
    (req, res) => {
        res.send('Loggedin');
    });

//Logout User
router.get('/std/logout', (req, res) => {
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
});

module.exports = router;