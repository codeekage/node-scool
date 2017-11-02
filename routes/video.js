const express = require('express'),
    Videos = require('../models/youtube-model'),
    router = express.Router();

router.get('/videos', (req, res, next) => {
    Videos.find({}).then(videos => {
        res.send(video)
    }).catch(next)
})

router.post('/videos', (req, res, next) => {
    Videos.create(req.body).then(videos => {
        res.send(videos);
    }).catch(next)
})

router.put('/videos/:_id', (req, res, next) => {
    Videos.findByIdAndUpdate({ _id: req.params._id }, req.body).then(() => {
        Videos.findOne({ _id: req.params._id }).then(video => {
            res.send(video)
        }).catch(next)
    }).catch(next)
})

router.delete('/videos', (req, res, next) => {

})


module.exports = router;