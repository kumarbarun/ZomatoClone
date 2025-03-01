import React, { useState, useEffect } from "react";
import Image from "../Assets/logo/background_login.jpg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = useState([]);

  const [error, setError] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setErrorConfirmPass("");
    setErrorPass("");
  };

  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Step 1: Check for empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      let missingFields = [];

      if (!formData.name) missingFields.push("name");
      if (!formData.email) missingFields.push("email");
      if (!formData.password) missingFields.push("password");
      if (!formData.confirmPassword) missingFields.push("Confirm password");

      setError(
        `*Please fill ${missingFields.join(", ")} field${
          missingFields.length > 1 ? "s" : ""
        }`
      );
      return;
    }

    // Step 2: Password Strength Validation
    if (formData.password.length < 8) {
      setErrorPass("*Password must be at least 8 characters long");
      return;
    }
 
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!specialCharPattern.test(formData.password)) {
      setErrorPass("*Password must contain at least one special character");
      return;
    }

    if (!uppercasePattern.test(formData.password)) {
      setErrorPass("*Password must contain at least one uppercase letter");
      return;
    }

    if (!lowercasePattern.test(formData.password)) {
      setErrorPass("*Password must contain at least one lowercase letter");
      return;
    }

    if (!numberPattern.test(formData.password)) {
      setErrorPass("*Password must contain at least one number");
      return;
    }

    // Step 3: Confirm Password Match
    if (formData.password !== formData.confirmPassword) {
      setErrorConfirmPass("*Passwords did'nt matched");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Your message has been sent successfully!");
    // navigate("/login");\
    try {
      const response = await axios.post('http://localhost:3000/api/signup/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error Details:', error.response?.data);
    }
    console.log(data);
  };

  return (
    <div className="relative w-full h-[84.3vh]">
      <img
        src={Image}
        alt="Background"
        className="absolute w-full h-full object-cover z-0"
      />

      <div className="relative w-full h-full flex justify-end items-center p-10">
        <div className="z-20 bg-white shadow-sm shadow-amber-300 p-2 rounded-lg w-4/10 h-19/20 mr-20 px-8">
          <h2 className="text-2xl font-bold text-center mb-4 mt-6">Sign Up</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter email"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute top-[2.2rem] text-xl right-4 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <p className="text-sm text-neutral-400">*Password must contains at least 8 characters and a combination of upper case, lower case, number and special character.</p>
            </div>

            <div className="relative">
              {errorPass && (
                <p className="absolute text-red-500 text-sm text-center -top-4">{errorPass}</p>
              )}
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute top-[2.2rem] text-xl right-4 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errorConfirmPass && (
                <p className="absolute text-red-500 text-sm text-center top-17">
                  {errorConfirmPass}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#fa6767] text-white py-2 mt-6 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
