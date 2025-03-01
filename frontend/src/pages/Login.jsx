import React, { useState } from "react";
import Image from "../Assets/logo/background_login.jpg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function Login({ setIsAuthenticated }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 
  const [errorPass, setErrorPass] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setErrorPass("");
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response:", response.data);
      alert("Successfully logged in!");
      setIsAuthenticated(true);
      navigate("/dashboard");

    } catch (error) {
      console.error("Error Details:", error.response?.data);

      if (error.response?.data?.message) {
        if (error.response.status === 404) {
          setError(error.response.data.message); 
          console.log(error.response.data.message);
          console.log(setError);
        } else if (error.response.status === 400) {
          setErrorPass(error.response.data.message); 
          console.log(error.response.data.message);
          console.log(setErrorPass);
        } else {
          setError("An unexpected error occurred.");
        }
      } else {
        setError("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="relative w-full h-[84.3vh]">
      <img src={Image} alt="Background" className="absolute w-full h-full object-cover z-0" />

      <div className="relative w-full h-full flex justify-end items-center p-10">
        <div className="z-20 bg-white shadow-sm shadow-amber-300 p-6 rounded-lg w-4/10 h-4/5 mr-25">
          <h2 className="text-2xl font-bold text-center mb-4 mt-13">Log In</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter email"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-gray-700 mt-5">Password</label>
              <button
                type="button"
                className="absolute top-[2.2rem] text-xl right-4 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
                required
              />
              {errorPass && <p className="text-red-500 text-sm mt-1">{errorPass}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#fa6767] text-white py-2 mt-6 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
