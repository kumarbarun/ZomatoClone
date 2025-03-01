import React from "react";
import Image from "../../../Assets/profile/Profile.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function ProfileCard() {
  return (
    <div className="h-screen  flex">
      <div className="h-105 w-[20vw] bg-gradient-to-t from-white via-white to-red-400 dropdown-blur-3xl m-2 justify-center items-center flex flex-col rounded-2xl">
        <img
          src={Image}
          alt="ProfilePic"
          className="relative -top-[3.4vh] h-[12vw] w-[12vw] rounded-full border-white border-solid border-4"
        />
        <h1 className="relative -top-[3.4vh] text-2xl font-mono font-bold">
          Ayushman Ghatuary
        </h1>
        <h2 className="relative -top-[3.4vh] font-serif font-light">
          Web Developer
        </h2>
        <p className="relative -top-[1.5vh] font-semibold flex mx-6 text-sm text-center">
          Eager to learn and grow by applying my skills to real world
          challenges. Passionate about front-end development and actively
          exploring.
        </p>

        <div className="relative top-[3vh] flex flex-row space-x-5">
            <div className="relative h-[1.8vh] px-[0.2vh] ">
          <FaLinkedin className=" text-blue-600 cursor-pointer"/></div>
          <FaGithub className="text-black cursor-pointer rounded-full"/>
          <FaSquareXTwitter className="cursor-pointer"/>
          <FaFacebookSquare className="text-blue-600 cursor-pointer"/>
          <BiLogoGmail className="text-red-500 cursor-pointer "/>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;