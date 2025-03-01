import React from "react";

const RestroCard=({name, image, desc}) => {
  return (
    <div className="flex justify-center items-center rounded-4x p-6">
      <div className="w-auto h-80 bg-white rounded-2xl shadow-lg transform transition duration-300 hover:scale-104  overflow-hidden">
        <img src={image} alt="Card" className="w-90 h-60" />
        <div className="absolute">
          <h2 className="relative text-lg left-3 pt-2">{name}</h2>
          <p className="relative left-3 text-gray-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestroCard;