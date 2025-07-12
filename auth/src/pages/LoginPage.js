// // src/pages/LoginPage.js
// import React from "react";
// import LoginForm from "../components/LoginForm";

// const LoginPage = () => {
//   return (
//     <div>
//       <h2>Login Page</h2>
//       <LoginForm />
//     </div>
//   );
// };

// export default LoginPage;


import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
