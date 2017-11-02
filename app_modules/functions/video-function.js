var VideoModel = require('../../models/video-model');

module.exports.getVideoByUploader = (uploaderName, callback) => {
    var query = { uploader_name: uploaderName };
    VideoModel.findOne(query, callback);
}

module.exports.getVideoByName = (videoName, callback) => {
    var query = { video_name: videdoName };
    VideoModel.findOne(query, callback)
}

module.exports.getVideoByCourse = (courseName, callback) => {
    var query = { course_name: courseName };
    VideoModel.findOne(query, callback);
}