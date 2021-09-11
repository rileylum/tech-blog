const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/new', async (req, res) => {
    try {
        const commentInput = {
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        };
        const commentData = await Comment.create(commentInput);
        const comment = commentData.get({plain:true});
        res.status(200).json(comment);
    } catch (err) {
        res.status(400).json(err.stack)
    }
});

module.exports = router;