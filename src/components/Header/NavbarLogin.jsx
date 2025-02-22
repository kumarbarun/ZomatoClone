import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Assets/logo/logoZomato.png";

const NavbarLogin = () => {
  return (
    <div>
      <ul className="fixed bottom-0 left-0 mx-auto px-4 flex flex-col justify-between md:flex-row items-center bg-[#fa6767] py-4 text-xl font-bold text-white">
        <img
          src={Image}
          alt="zomato img"
          style={{ width: 65, height:50 }}
          className="ml-8 rounded-xl shadow-blue-50"
        />
        <div className="mx-auto flex gap-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Profile</Link>
          </li>
          <li>
            <Link to="/signup">Sign Out</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavbarLogin;
