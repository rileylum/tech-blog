const router = require('express').Router();
const { User, Post} = require('../models');

router.get('/new', (req, res) => {
    if(req.session.logged_in){
       res.render('newPost');
    } else {
        res.redirect('/login');
    }
    
})

router.get('/view/:id', async(req, res) => {
    const postData = await Post.findByPk(req.params.id, {
        include: [{model: User, attributes: ['id', 'name']}],
        raw:true, 
        nest:true
        });
    res.render('viewPost', {postData, currentUser: req.session.user_id});
})

router.get('/edit/:id', async(req, res) => {
    if(req.session.logged_in){
        const postData = await Post.findByPk(req.params.id, {raw:true});
        res.render('editPost', {postData});
     } else {
         res.redirect('/login');
     }
})

module.exports = router;