import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login"); // Redirect to login page after signup
    toast.success("Account created successfully! Please login.");  
    }

  return (
    <div className="!text-black flex min-h-screen items-center justify-center bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 rounded-xl shadow-md p-8 w-full max-w-md flex flex-col gap-4 backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2 animate-fade-in">
          Sign Up
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={handleChange}
          className="input"
        />
        <motion.button
          whileHover={{
            scale: 1.04,
            backgroundColor: "#6366f1",
            color: "#fff",
          }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 px-6 rounded-lg bg-indigo-500 text-indigo-100 font-semibold transition focus:outline-none shadow-lg"
          type="submit"
        >
          Create Account
        </motion.button>
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 underline font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
