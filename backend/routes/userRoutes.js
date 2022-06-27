import express from 'express'
import { authUser, userProfile } from '../controllers/userController.js';
import fetchUser from '../middlewares/fetchUser.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/profile').get(fetchUser, userProfile);
// router.route('/register').post(registeruser);

export default router;