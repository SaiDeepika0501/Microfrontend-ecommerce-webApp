// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

router.post('/register', register);
router.post('/login', login);

router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: "Access granted to protected profile route",
    user: req.user, // This comes from the decoded token
  });
});

module.exports = router;
