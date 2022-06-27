import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const fetchUser = asyncHandler( async (req, res, next) => {
  let token;
  if (
    req.header("auth-token") &&
    req.header("auth-token").startsWith("Bearer")
  ) {
    try {

      token = req.header("auth-token").split(" ")[1];

      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      req.user = await User.findById(decoded.id).select('-password');

      next();
      
    } catch (error) {

        res.status(401);
        res.send('Not a valid token');
    }

  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, No token");
  }
});

export default fetchUser;
