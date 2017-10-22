
// TODO - abstract connection logic into separate file?
const esodm = require('elasticsearch-odm-5');
const Car = require('./car.model');

// // // //

// GET /cars
module.exports.list = (req, res, next) => {

    let queryOptions = {
        page:       Number(req.query.page) || 0,
        per_page:   Number(req.query.per_page) || 10,
    };

    let query = {};

    esodm.connect('cars').then(() => {
      Car.find(query, queryOptions).then((documents) => {
        res.send(documents).end();
      });
    });

};

// // // //

// POST /cars
module.exports.create = (req, res, next) => {

    // TODO - abstract connect into bin/www.js
    return esodm.connect('cars').then(() => {

      let newCar = new Car({ type: req.body.type, color: req.body.color });

      newCar.save().then((response) => {
        res.send(response).end();
      });

    });
};

// // // //

// GET /cars/:id
module.exports.show = (req, res, next) => {

    // TODO - abstract into /bin/www.js
    return esodm.connect('cars').then(() => {
        Car.findById(req.params.id).then((response) => {
            return res.status(200).send(response).end();
        });
    });
};

// // // //

// PUT /cars/:id
module.exports.update = (req, res, next) => {

    // TODO - abstract into /bin/www.js
    return esodm.connect('cars').then(() => {
        Car.findById(req.params.id).then((doc) => {
            doc.update(req.body).then((response) => {
                return res.status(200).send(response).end();
            });
        });
    });
};

// // // //

// DELETE /cars/:id
module.exports.delete = (req, res, next) => {
    // TODO - abstract into /bin/www.js
    return esodm.connect('cars').then(() => {
        Car.remove(req.params.id).then((response) => {
            return res.status(200).send(response).end();
        });
    });
};
