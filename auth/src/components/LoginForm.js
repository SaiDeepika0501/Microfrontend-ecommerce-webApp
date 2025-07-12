
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const [email, setEmail] = useState("test@example.com");
//   const [password, setPassword] = useState("123456");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", res.data.token);
//       alert("✅ Logged in!");
//       navigate("/dashboard");
//     } catch (err) {
//       alert("❌ Login failed");
//       console.error(err.response?.data || err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Login</h3>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       /><br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;



import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onLogin) {
      await onLogin(email, password); // call passed-in function
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Form</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
