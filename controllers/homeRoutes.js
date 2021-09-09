const router = require('express').Router();
const { Post, User } = require('../models');

// home route
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [{model: User, attributes: ['id', 'name']}],
        raw:true,
        nest:true
    });
    const currentUser = String(req.session.user_id);

    console.log(currentUser);
    res.render('home', {postData, currentUser});
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
       return res.render('dashboard', {userPostData, currentUser: req.session.user_id});
    } else {
        res.redirect('/login');
    }
    
})

module.exports = router;