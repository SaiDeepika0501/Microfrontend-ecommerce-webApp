const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'mysecret';

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
};
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1d' });

// // Convert the Mongoose document to a plain JS object and remove the password
// const { password, ...userWithoutPassword } = user.toObject();

// res.json({ token, user: userWithoutPassword });
//   } catch (err) {
//     res.status(500).json({ message: 'Login failed' });
//   }
// };
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1d' });

    const { password: _, ...userWithoutPassword } = user.toObject(); // optional rename for clarity
    res.json({ token, user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
};
