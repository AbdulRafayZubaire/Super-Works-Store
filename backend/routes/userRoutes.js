import express from 'express'
import { authUser, registerUser, userProfile, updateUserProfile } from '../controllers/userController.js';
import fetchUser from '../middlewares/fetchUser.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/profile').get(fetchUser, userProfile).put(fetchUser, updateUserProfile)
router.route('/').post(registerUser);

export default router;