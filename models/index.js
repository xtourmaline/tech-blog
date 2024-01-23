const User = require("./user");
const BlogPost = require("./blogpost");
const Comment = require("./comment");

User.hasMany(BlogPost, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

BlogPost.hasMany(Comment, {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(BlogPost, {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

module.exports = { User, BlogPost, Comment };