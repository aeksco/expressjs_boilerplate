const router = require('express').Router()

// // // //

// Bootstrap API routers
router.use('/auth', require('./api/auth'))
router.use('/users', require('./api/user'))
router.use('/widgets', require('./api/widget'))
router.use('/cars', require('./api/car'))

// // // //

module.exports = router
