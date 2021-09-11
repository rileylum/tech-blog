const router = require('express').Router();
const { User, Post, Comment} = require('../models');

// new post route
router.get('/new', (req, res) => {
    if(req.session.logged_in){
       res.render('newPost');
    } else {
        res.redirect('/login');
    }
})
// view a single post
router.get('/view/:id', async(req, res) => {
    // get post from url param
    const postData = await Post.findByPk(req.params.id, {
        include: [{model: User, attributes: ['id', 'name']}],
        raw:true, 
        nest:true
        });
    // get comments for the post
    const commentData = await Comment.findAll({where: {post_id: postData.id}, include: [{model: User, attributes: ['id', 'name']}], raw:true, nest:true});
    res.render('viewPost', {postData, currentUser: req.session.user_id, commentData});
})

// edit a single post
router.get('/edit/:id', async(req, res) => {
    if(req.session.logged_in){
        const postData = await Post.findByPk(req.params.id, {raw:true});
        res.render('editPost', {postData});
     } else {
         res.redirect('/login');
     }
})
// delete a single post and redirect to dashboard
router.get('/delete/:id', async(req, res) => {
    if(req.session.logged_in){
        await Post.destroy({where: {id: req.params.id}});
        res.redirect('/dashboard');
     } else {
         res.redirect('/login');
     }
})
// add a comment
router.get('/:id/comment', async(req, res) => {
    if(req.session.logged_in){
        res.render('comment', {post_id: req.params.id});
    } else {
        res.redirect('/login');
    }
})

module.exports = router;