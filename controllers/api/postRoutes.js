const router = require('express').Router();
const { Post } = require('../../models');

// Create new user
router.post('/new', async (req, res) => {
    try {
        const postInput = {
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        };
        const postData = await Post.create(postInput);
        const post = postData.get({plain:true});
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err.stack)
    }
});

router.patch('/edit/:id', async (req, res) => {
    try {
        const postInput = {
            title: req.body.title,
            content: req.body.content,
        };
        console.log(postInput);
        console.log(req.params.id);
        await Post.update(postInput, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json();
    } catch (err) {
        res.status(400).json(err.stack)
    }
});



module.exports = router;