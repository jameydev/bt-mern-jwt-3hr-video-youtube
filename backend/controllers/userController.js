import asyncHandler from 'express-async-handler';

// @desc Auth user/set token
// @route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User is authenticated' });
});

// @desc Logout user
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User is logged out' });
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User registered' });
});

// @desc Get user profile
// @route POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User profile' });
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User profile updated' });
});

export {
    authUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile
};