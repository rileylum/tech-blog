const router = require('express').Router();

router.get('/new', (req, res) => {
    if(req.session.logged_in){
       return res.render('newPost');
    } else {
        res.redirect('/login');
    }
    
})

module.exports = router;