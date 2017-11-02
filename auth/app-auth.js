var User = require('../models/admin-model'),
    Student = require('../models/student-model');


//REGISTER ADMIN
module.exports.registerUser = (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    // Validation
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        res.status(422).send({ error: errors })
    } else {
        var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        User.createUser(newUser, (err, user) => {
            if (err) throw err;
            //res.send(user)
            console.log(user);
        });

        req.flash('success_msg', 'You are registered and can now login');

        res.redirect('/users/login');
    }
}

//REGISTER A STUDENT
module.exports.registerStudent = (req, res) => {
    // Validation
    req.checkBody('stud_id', 'student_id must be provided').notEmpty();
    req.checkBody('stud_id', 'student_id must be provided').notEmpty();
    req.checkBody('username', 'student registration_number is respresented as username required').notEmpty();
    req.checkBody('firstname', 'student firstname is required').notEmpty();
    req.checkBody('middlename', 'student middlename is required').notEmpty();
    req.checkBody('lastname', 'student lastname is required').notEmpty();
    req.checkBody('email', 'invaild email').isEmail();
    req.checkBody('password', 'passkey must be provided').notEmpty();
    req.checkBody('passwordConf', 'passkey must be provided').equals(req.body.password);
    req.checkBody('student_academics', 'student_academics must be provided').notEmpty()


    //Initialize errors variable
    var errors = req.validationErrors();

    if (errors) {
        res.status(422).send({ error: errors })
    } else {

        var newStudent = new Student({
            stud_id: req.body.stud_id,
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
            username: req.body.username,
            email: req.body.email,
            student_academics: req.body.student_academics
        });


        Student.createStudent(newStudent, (err, user) => {
            if (err) {
                res.status(422).send({ error: err.message })
                console.log(err)
            };
            res.send(user)
            console.log(user);

        })
        req.flash('success_msg', 'You are registered and can now login');
        // res.send(user)

        //res.redirect('/users/login');
    }
}