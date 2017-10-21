const Widget = require('./widget.model')

// // // //

// GET /widgets
// TODO - pagination (middleware?)
module.exports.list = (req, res, next) => {
    return Widget.find({}).then(function(response) {
        return res.status(200).send(response).end();
    }).catch(next);
};

// // // //

// POST /widgets
module.exports.create = (req, res, next) => {
    return new Widget(req.body).save().then(function(response) {
        return res.status(200).send(response).end();
    }).catch(next);
};

// // // //

// GET /widgets/:id
module.exports.show = (req, res, next) => {
    return Widget.findById(req.params.id).then(function(response) {
        return res.status(200).send(response).end();
    }).catch(next);
};

// // // //

// PUT /widgets/:id
module.exports.update = (req, res, next) => {
    return Widget.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true }).then(function(response) {
        return res.status(200).send(response).end();
    }).catch(next);
};

// // // //

// DELETE /widgets/:id
module.exports.delete = (req, res, next) => {
    return Widget.remove({_id: req.params.id }).then(function(response) {
        return res.status(200).send(response).end();
    }).catch(next);
};
