const router = require('express').Router();
const { BlogPost } = require("../../models")
const withAuth = require('../../utils/auth');

router.post("/", async (req, res) => {
    try {
        const blogPostData = await BlogPost.create({
            ...req.body,
            //user_id: req.session.user_id
        })

        res.status(200).json(blogPostData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;