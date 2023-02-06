require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = {
  isAuthenticated: (req, res, next) => {
    const headerToken = req.get("Authorization");

    console.log(JWT_SECRET, headerToken, "header toooken");
    if (!headerToken) {
      console.log("ERROR IN auth middleware");
      res.sendStatus(401);
    }

    let token;

    try {
      token = jwt.verify(headerToken, JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log(err, "err");
        }
      });
    } catch (err) {
      err.statusCode = 500;
      console.log("coming from here");
      throw err;
    }

    if (!token) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }

    next();
  },
};
