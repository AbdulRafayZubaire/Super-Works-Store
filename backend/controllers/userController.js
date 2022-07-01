import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// POST api/usersl/login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or Password");
  }
});

// GET /api/users/profile
const userProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  console.log('inside function');
  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// PUT /api/users/profile    --> update user route
const updateUserProfile = asyncHandler(async (req, res) => {

  const user = await User.findById(req.user.id);
  

  if (user) {
    
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email
    if(req.body.password){
      
      user.password = req.body.password
    }   
        const updatedUser = await user.save();

    res.json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({name, email, password});

  if (user) {
    res.status(201)
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
  else{
    res.status(404);
    throw new Error('Invalid User Data')
  }
});

export { authUser, userProfile, registerUser, updateUserProfile };
