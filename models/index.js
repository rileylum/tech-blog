const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// One User has Many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// One Post has One User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})
// One Post has Many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
// One Comment has One Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };