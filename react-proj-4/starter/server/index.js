require("dotenv").config();
const { sequelize } = require("./utli/database");
const { user } = require('./models/user')
const { post } = require('./models/post')
const express = require("express");
const cors = require("cors");


user.hasMany(post)
post.belongsTo(user)


const { PORT } = process.env;
const {
  getAllPosts,
  getCurrentPosts,
  addPost,
  deletePost,
  getCurrentUserPosts,
  editPost,
} = require("./controllers/posts");
const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");

const app = express();

app.use(express.json);
app.use(cors());

//AUTH

app.post("/register", register);
app.post("/login", login);

//GET POSTS - no auth

app.get("/posts", getAllPosts);

//CRUD POSTS - auth required

app.get("/userposts/:userId", getCurrentUserPosts);
app.post("/posts", isAuthenticated, addPost);
app.put("/posts/:id", isAuthenticated, editPost);
app.delete("/posts/:id", isAuthenticated, deletePost);




sequelize.sync().then(() => {
  app.listen(PORT, () =>
  console.log(`db successful & server running on port ${PORT}`)
);
}).catch(err => console.log(err))