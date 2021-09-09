const router = require('express').Router();
const { Post} = require('../models');

router.get('/new', (req, res) => {
    if(req.session.logged_in){
       res.render('newPost');
    } else {
        res.redirect('/login');
    }
    
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