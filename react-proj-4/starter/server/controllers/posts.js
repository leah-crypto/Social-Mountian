const { post } = require('../models/post');
const { user } = require('../models/user');
const { sequelize } = require('../utli/database');


module.exports = {
  getAllPosts: async (req, res) => {
    // console.log("get all posts");
  try{
    const posts = await post.findAll({
      where: {privateStatus: false},
      include: [{
        model: user,
        required: true,
        attributes: [`username`]
      }]
    })
    res.status(200).send(posts)
  }catch(err){
    console.log(err)
    console.log('ERROR IN getAllPosts')
    res.sendStatus(400)
  }
  },
  getCurrentUserPosts: async (req, res) => {
    // console.log("currnt user posts");
    try {
      const {userId} = req.params
      const posts = await post.findAll({
        where: {userId: userId},
        include: [{
          model: user,
          required: true,
          attributes: [`username`]
        }]
      })
      res.status(200).send(posts)
    } catch (err){
      console.log(err)
      console.log("ERROR IN getCurrentUserPosts")
      res.sendStatus(400)
    }
  },

  addPost: async (req, res) => {
    
    
    try{
      console.log("add post");
      const {title, content, status, userId} = req.body
      await post.create({title, content, privateStatus: status, userId})
      res.sendStatus(200)
    }catch(err){
      console.log("ERROR IN getCurrentUserPosts")
      console.log(err)
      console.log(400)
    }
  },

  editPost: async (req, res) => {
    
    // console.log("edit post");
    try{
      const {id} = req.params
      const {status} = req.body
      await post.update({privateStatus: status},{
        
        where: {id: +id}
      })
      res.sendStatus(200)
    }catch(err){
      console.log(err)
      console.log("ERROR ON getCurrentUserPosts")
      res.status(400)
    }
  },

  deletePost: async (req, res) => {
    // console.log("delete post");
    try{
      const {id} = req.params
      await post.destroy({where: {id: +id}})
      res.sendStatus(200)
    }catch(err){
      console.log("ERROR IN getCurerentUserPosts")
      console.log(err)
      res.status(400)
    }
  },

 
};


