const express = require('express');
const router = express.Router();
const Exams = require('../models/exams-model');

router.get('/exams', (req, res, next) => {
    Exams.find({ course_name: req.query.name })
        .then((exams) => {
            res.send(exams.course.course_name)
        }).catch(next)
})

router.post('/exams', (req, res, next) => {
    Exams.create(req.body).then((exams) => {
        res.send(exams)
    }).catch(next)
})

module.exports = router