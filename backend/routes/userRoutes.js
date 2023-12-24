import express from 'express';
import { 
    authUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile).put('/profile', updateUserProfile);

export default router;