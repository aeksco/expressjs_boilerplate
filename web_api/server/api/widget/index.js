const router = require('express').Router()
const controller = require('./widget.controller')

// // // //

// GET /widgets
router.get('/', controller.list)

// POST /widgets
router.post('/', controller.create)

// GET /widgets/:id
router.get('/:id', controller.show)

// PUT /widgets/:id
router.put('/:id', controller.update)

// DELETE /widgets/:id
router.delete('/:id', controller.delete)

// // // //

module.exports = router
