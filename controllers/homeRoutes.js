const router = require('express').Router();

// home route
router.get('/', (req, res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

router.get('/dashboard', (req, res) => {
    if(req.session.logged_in){
       return res.render('dashboard');
    } else {
        res.redirect('/login');
    }
    
})

module.exports = router;