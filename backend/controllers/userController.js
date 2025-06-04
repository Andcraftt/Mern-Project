const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

//Register user
const registerUser = asyncHandler( async(req, res) => {
    res.json({ message: 'Register User'})
})

//Login user
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User'})
})

const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data display'})
})