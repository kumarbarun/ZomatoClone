import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Assets/logo/logoZomato.png";
import { IoCart } from "react-icons/io5";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };
  return (
    <div>
      <ul className="flex md:flex-row  bg-[#fa6767] py-2 text-xl font-bold text-white items-center">
        <img
          src={Image}
          alt="zomato img"
          style={{ width: 65, height: 50 }}
          className="relative rounded-xl shadow-blue-50 ml-20"
        />

        {isAuthenticated ? (
          <div className="absolute right-20 flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
            <div className="relative ml-10">
              <li>
                <Link to="/cart">
                  <IoCart className="text-[#ffffff] text-3xl cursor-pointer" />
                  <p
                    className="absolute -top-1 -right-2 h-6 w-6 flex items-center justify-center 
                rounded-full bg-black text-white text-sm"
                  >
                    1
                  </p>
                </Link>
              </li>
            </div>
          </div>
        ) : (
          <div className="absolute flex right-20 gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
