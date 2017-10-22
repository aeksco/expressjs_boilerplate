const router = require('express').Router();
const controller = require('./car.controller');

// // // //

// GET /cars
router.get('/', controller.list);

// POST /cars
router.post('/', controller.create);

// GET /cars/:id
router.get('/:id', controller.show);

// PUT /cars/:id
router.put('/:id', controller.update);

// DELETE /cars/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
