const router = require('express').Router()
const controller = require('./auth.controller')

// // // //

// POST /register
router.post('/register', controller.register)

// POST /login
router.post('/login', controller.login)

// QUESTION - ARE THESE USED?
// router.use('/check', authMiddleware)
// router.get('/check', controller.check)

// // // //

module.exports = router
