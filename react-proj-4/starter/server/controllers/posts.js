const { post } = require('../models/post')
const { user } = require('../models/user')


module.exports = {
  getAllPosts: (req, res) => {
    console.log("get all posts");
  },
  getCurrentUserPosts: (req, res) => {
    console.log("currnt user posts");
  },

  addPost: async (req, res) => {
    // console.log("add post");
    try{
      const {title, content, status, userId} = req.body
      await post.create({title, content, privateStatus: status, userId})
      res.sendStatus(200)
    }catch(err){
      console.log("ERROR IN getCurrentUserPosts")
      console.log(err)
      console.log(400)
    }
  },

  editPost: (req, res) => {
    console.log("edit post");
  },

  deletePost: (req, res) => {
    console.log("delete post");
  },

 
};


