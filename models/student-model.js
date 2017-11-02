const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');


const Schema = mongoose.Schema;

const StudentCourse = new Schema({
    stud_dept: {
        type: String,
        required: true
    },
    stud_faculty: {
        type: String,
        required: true
    },
    courses: {
        type: [String],
        required: true
    },
    stud_level: {
        type: String,
        required: true
    }
})
const StudentSchema = new Schema({
    stud_id: {
        type: Object(String),
        unique: [true, 'Student id already exist, if new student please check id ']
    },
    username: {
        type: String,
        unique: [true, 'reg number already exist '],
        required: true
    },
    firstname: {
        type: String,
        required: [true, 'student firstname is required']
    },
    lastname: {
        type: String,
        required: [true, 'student lastname is required']
    },
    middlename: {
        type: String,
        required: [true, 'student middle name is required']
    },
    regdate: {
        type: Date,
        default: Date.now()
    },
    password: {
        type: String,
        required: true,

    },
    passwordConf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    student_acdemics: StudentCourse
});



const StudentModel = mongoose.model('student', StudentSchema);
module.exports = StudentModel