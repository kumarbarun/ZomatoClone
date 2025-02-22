import React, { useRef } from "react";

const Circlecard = ({ image, name }) => {
  return (
    <div className="w-48 h-45 flex flex-col justify-center items-center mb-4 mx-1">
      <img
        src={image}
        alt={name}
        className="rounded-full w-full h-full object-cover"
      />
      <p className="text-center font-semibold">{name}</p>
    </div>
  );
};

export default Circlecard;
