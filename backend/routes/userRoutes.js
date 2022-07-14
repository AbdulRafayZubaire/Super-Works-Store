import express from "express";
import {
  authUser,
  registerUser,
  userProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  googleAuth,
} from "../controllers/userController.js";
import { fetchUser, adminAuth } from "../middlewares/fetchUser.js";

const router = express.Router();

router.route("/login").post(authUser);
router
  .route("/profile")
  .get(fetchUser, userProfile)
  .put(fetchUser, updateUserProfile);

router.route("/").post(registerUser).get(fetchUser, adminAuth, getUsers);
router.route("/google").post(googleAuth);

router
  .route("/:id")
  .delete(fetchUser, adminAuth, deleteUser)
  .get(fetchUser, adminAuth, getUserById)
  .put(fetchUser, adminAuth, updateUser);

export default router;
