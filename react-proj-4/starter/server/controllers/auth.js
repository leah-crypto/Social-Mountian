require('dotenv').config()
const {SECRET} = process.env
const {user} = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    register: ( req, res) => {
        console.log('register')
    },

    login: (req, res) => {
        console.log('login')
    },
}