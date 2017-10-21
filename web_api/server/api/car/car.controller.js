
// TODO - abstract connection logic into separate file
const esodm = require('elasticsearch-odm-5');
const Car = require('./car.model');

// // // //

// GET /cars
// TODO - pagination (middleware?)
module.exports.list = (req, res, next) => {

    esodm.connect('eb_test_index').then(function(){
      // be sure to call connect before bootstrapping your app.
      Car.find().then(function(documents){
        console.log(documents);
        res.send(documents).end();
      });
    });

};

// // // //

// POST /cars
module.exports.create = (req, res, next) => {

    // TODO - abstract connect into bin/www.js
    return esodm.connect('eb_test_index').then(function(){
      // be sure to call connect before bootstrapping your app.
      Car.save().then(function(document){
        console.log(document);
        res.send(document).end();
      });
    });
};

// // // //

// GET /cars/:id
module.exports.show = (req, res, next) => {
    return esodm.connect('eb_test_index').then( () => {
        Car.findById(req.params.id).then( (response) => {
            return res.status(200).send(response).end();
        });
    });
};

// // // //

// PUT /cars/:id
module.exports.update = (req, res, next) => {
    // return Widget.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true }).then(function(response) {
    //     return res.status(200).send(response).end();
    // }).catch(next);
};

// // // //

// DELETE /cars/:id
module.exports.delete = (req, res, next) => {
    // return Widget.remove({_id: req.params.id }).then(function(response) {
    //     return res.status(200).send(response).end();
    // }).catch(next);
};
