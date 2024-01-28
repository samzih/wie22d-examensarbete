const express = require('express');
const router = express.Router();
const { register, login, logout, updateProfile } = require('../controllers/UserController');
const joiValidate = require('../middlewares/joiValidationMiddleware');
const { CreateUserSchema } = require('../models/UserModel');
const auth = require('../middlewares/authMiddleware');


router.post('/register', joiValidate(CreateUserSchema), register);
router.post('/login', login);
router.post('/logout', logout);
router.patch('/profile', auth, updateProfile);


module.exports = router;
