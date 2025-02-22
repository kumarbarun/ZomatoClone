import React from "react";
import Image from "../Assets/logo/background_login.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  }
   return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <img
        src={Image}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 bg-white shadow-white-100 shadow-[0_0_30px_rgba(255,255,255,0.8)] p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>
          

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#fa6767]  text-white py-2 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
