const router = require('express').Router();
const controller = require('./<%= resource_name %>.controller');

// // // //

// GET /<%= resource_route %>
router.get('/', controller.list);

// POST /<%= resource_route %>
router.post('/', controller.create);

// GET /<%= resource_route %>/:id
router.get('/:id', controller.show);

// PUT /<%= resource_route %>/:id
router.put('/:id', controller.update);

// DELETE /<%= resource_route %>/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
