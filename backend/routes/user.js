// const express = require('express');
// const router = express.Router();
// const verifyToken = require('../middleware/verifyToken');

// router.get('/profile', verifyToken, (req, res) => {
//   res.json({ message: "Profile accessed", user: req.user });
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');

router.get('/profile', verifyToken, async (req, res) => {
  console.log("📩 Profile route hit by user ID:", req.user.id);
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      console.log("❌ No user found");
      return res.status(404).json({ message: 'User not found' });
    }
    console.log("✅ User profile found:", user.email);
    res.json(user);
  } catch (err) {
    console.error("💥 Error in profile route:", err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
