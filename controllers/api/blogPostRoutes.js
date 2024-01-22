const router = require('express').Router();
const { BlogPost } = require("../../models")
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(blogPostData)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const updateData = await BlogPost.update(
            {
                ...req.body
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.status(200).json(updateData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const deletedData = await BlogPost.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(deletedData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;