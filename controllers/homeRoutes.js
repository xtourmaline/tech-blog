const router = require('express').Router();
const { User, BlogPost, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data and comments
        const postData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ],
            order: [
                ["created", "DESC"]
            ]
        });
    
        const blogPosts = postData.map((blogPost) => blogPost.get({ plain: true }));

        let user = {};
        if (req.session.logged_in) {
            user = (await User.findByPk(req.session.user_id)).get({ plain: true });
        }

        // Pass serialized data and session flag into template
        res.render('homepage', { 
            blogPosts, 
            logged_in: req.session.logged_in,
            user: user
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});

router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"]},
            include: [
                {
                    model: BlogPost,
                    include: [ User ],
                }
            ],
            order: [
                [BlogPost, "created", "DESC"]
            ]
        });

        const user = userData.get({ plain: true });
        console.log(user)

        res.render("dashboard", {
            user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;