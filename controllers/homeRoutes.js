const router = require('express').Router();
const { Post } = require('../models');

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

router.get('/dashboard', async (req, res) => {
    if(req.session.logged_in){
        const userPostData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            raw: true
        });
        console.log(userPostData);
       return res.render('dashboard', {userPostData});
    } else {
        res.redirect('/login');
    }
    
})

module.exports = router;