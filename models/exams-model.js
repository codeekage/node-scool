const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionsSchema = new Schema({
    optA: {
        type: String,
        required: true
    },
    optB: {
        type: String,
        required: true
    },
    optC: {
        type: String,
        required: true
    },
    optD: {
        type: String,
        required: true
    },
    optE: {
        type: String,
        required: true
    }
})

var CourseSchema = new Schema({
    course_name: {
        type: String,
        required: true
    },
    course_code: {
        unique: true,
        type: String,
        required: true
    }

})

var ExamsSchema = new Schema({
    course: CourseSchema,
    questions: {
        type: String,
        required: [true, 'this field is required']
    },
    options: QuestionsSchema,
    answer: {
        type: String,
        required: true
    }

});

var ExamsModel = mongoose.model('examination', ExamsSchema);
module.exports = ExamsModel;

module.exports.getExamByCourse = (course_code) => {

}