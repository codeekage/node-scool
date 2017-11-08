'use strict';


const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
    uploader_name: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    video_name: {
        type: String,
        required: true
    }
})

var VideoModel = mongoose.model('videos', VideoSchema);
module.exports = VideoModel;