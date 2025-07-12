// // const jwt = require("jsonwebtoken");

// // module.exports = function (req, res, next) {
// //   const authHeader = req.headers["authorization"];

// //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
// //     return res.status(401).json({ message: "No token provided" });
// //   }

// //   const token = authHeader.split(" ")[1];

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded; // you can access user data later via req.user
// //     next();
// //   } catch (err) {
// //     return res.status(403).json({ message: "Invalid token" });
// //   }
// // };
// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     return res.status(403).json({ error: 'Invalid token' });
//   }
// };
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || '6f17f89b9dc04619ac3208da1d795afd0ac8061bf801f738436872910e81dfda57f36c956664f4bfd5ee31010d83eb62e68aef9e703340653823c95c56e9d993';

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log("🔐 Incoming auth header:", authHeader);

  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    console.log("❌ No token found");
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("❌ Invalid token");
      return res.status(403).json({ message: 'Invalid token' });
    }
    console.log("✅ Token verified for user:", user);
    req.user = user;
    next();
  });
};
