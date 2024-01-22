const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/UserController');
const joiValidate = require('../middlewares/joiValidationMiddleware');
const { CreateUserSchema } = require('../models/UserModel');

router.post('/register', joiValidate(CreateUserSchema), register);
router.post('/login', login);
router.post('/logout', logout);


module.exports = router;
