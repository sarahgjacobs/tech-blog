const router = require('express').Router();

router.get('/', (req, res) => {
    // Show homepage
    res.render('all')
})

router.get('/profile', (req, res) => {
    // Show logged-in user's profile
    res.render('profile')
})

router.get('/login', (req, res) => {

})

router.get('/signUp', (req, res) => {

})

module.exports = router;