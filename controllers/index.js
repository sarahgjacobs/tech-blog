const router = require('express').Router();
const homeRoute = require('./home-routes')
const api = require('./api')
router.use('/', homeRoute)
router.use('/api', api)


module.exports = router;