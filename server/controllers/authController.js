const jwt = require('jsonwebtoken');
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { createSendToken } = require("../utils/signToken")


exports.signup = catchAsync(async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
      //return res.status(400).json({
      //    status:"error",
      //    message:"Missing required fields"    
      //});
      // return next(new AppError("Missing required fields", 400));
      return next(new AppError("Missing required fields", 400));
  }
  const user = await User.findOne({ email: req.body.email });

  if (user) {
      return next(new AppError("User already exists", 400));
  }

  const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      
  }); // for creating a new user in the database 

  createSendToken(newUser, 201, res);
  // res.status(201).json({
  //     status:"success",
  //     date: newUser
  // });

});



exports.login = catchAsync(async (req, res, next) => {

  const { email, password } = req.body; // object destructuring

  if (!email || !password) {
      return next(new AppError("Missing required fields", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
      return next(new AppError("User not found", 404));
  }

  const isPasswordCorrect = await user.correctPassword(password, user.password);

  if (!isPasswordCorrect) {
      return next(new AppError("Invalid password", 401));
  }

  createSendToken(user, 200, res);
});

exports.getProfile = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    
    res.status(200).json({
      status: "success",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  });






