const router = require('express').Router()
// const authMiddleware = require('./middleware/auth')
// const auth = require('./auth/router')

// // // //

// Bootstrap API routers
router.use('/auth', require('./api/user'))
router.use('/users', require('./api/user'))

// // // //

module.exports = router
