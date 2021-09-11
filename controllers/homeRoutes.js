const router = require('express').Router();
const { Post, User } = require('../models');

// homepage route
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [{model: User, attributes: ['id', 'name']}],
        raw:true,
        nest:true
    });
    const currentUser = String(req.session.user_id);
    res.render('home', {postData, currentUser});
})
// display login page
router.get('/login', (req, res) => {
    res.render('login');
})
// destroy session to logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

// display users dashboard
router.get('/dashboard', async (req, res) => {
    // if logged in
    if(req.session.logged_in){
        // get all posts that belong to current user
        const userPostData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            raw: true
        });
        // render dashboard
       return res.render('dashboard', {userPostData, currentUser: req.session.user_id});
    } else {
        // if user isn't logged in redirect to login
        res.redirect('/login');
    }
    
})

module.exports = router;