import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      credentials.email === storedUser.email &&
      credentials.password === storedUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
     toast.success("Login successful!");
      navigate("/"); // Redirect to any protected page
    } else {
     toast.error("Invalid email or password. Please try again.");
      navigate("/signup");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent !text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 rounded-xl shadow-md p-8 w-full max-w-md flex flex-col gap-4 backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2 animate-fade-in">Login</h2>
        <input type="email" name="email" placeholder="Email" required value={credentials.email}
          onChange={handleChange} className="input" />
        <input type="password" name="password" placeholder="Password" required value={credentials.password}
          onChange={handleChange} className="input" />
        <motion.button
          whileHover={{
            scale: 1.04,
            backgroundColor: "#6366f1",
            color: "#fff",
          }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 px-6 rounded-lg bg-indigo-500 text-indigo-100 font-semibold transition focus:outline-none shadow-lg"
         
        >
      Login
        </motion.button>
        <p className="text-center text-sm mt-2">
          Don't have an account? <Link to="/" className="text-indigo-600 underline font-medium">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
