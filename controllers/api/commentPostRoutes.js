const router = require('express').Router();
const { BlogPost, Comment } = require("../../models")
const withAuth = require('../../utils/auth');

router.get("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: BlogPost,
                    where: {
                        blogPost_id: req.params.id
                    }
                }
            ]
        });

        const comment = await commentData.get({ plain: true });

        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;