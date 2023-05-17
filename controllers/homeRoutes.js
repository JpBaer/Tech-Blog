const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Populate homepage with all posts
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{model: User}],
      });
      
      const posts = postData.map((blogPost) => blogPost.get({ plain: true }));

        res.render('homepage',{posts, loggedIn: req.session.loggedIn})
   
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Populate dashboard with user info and their blogs
  router.get('/dashboard', withAuth, async (req, res)=> {
    try {
      const userData = await User.findByPk(req.session.user_id,{
        attributes: {exclude: ['password']},
        include: [{model: Post}],
      });

      const user = userData.get({plain: true});
      console.log(user)

      res.render('dashboard',{...user, loggedIn: req.session.loggedIn})
    } catch (err) {
      res.status(500).json(err);
    }
  })

  //Single blog post page
  router.get('/post/:id', async (req, res)=> {
    try {
      console.log('Single post get route')
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          }
        ],
      });
     // console.log(postData)
      const post = postData.get({plain: true});
      console.log(post)

      const commentData = await Comment.findAll({where: {
        post_id: req.params.id
    }, include: [{model:User}]})

     // console.log(commentData)
      const comments = commentData.map((comments) => comments.get({ plain: true }));
      console.log(comments)
      res.render('blog',{...post, comments, loggedIn: req.session.loggedIn})
    } catch (err) {
      res.status(500).json(err);
    }
  })



  router.get('/login', (req, res) => {
    // If the user is already logged in take them to the homepage
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;