import React from "react";
import Circlecard from "../components/Circlecard";
import FoodData from "../data/FoodData";

const Carousel = () => {
  return (
    <div className="bg-gray-100">
      <h2 className="text-2xl font-bold py-4 flex justify-center items-center">
        Inspiration for your first order
      </h2>
      <div className="absolute w-full flex justify-between bg-gray-100">
        <button className="relative ml-45 px-3 bg-white my-20 mb-24 pb-1 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.9)] shadow-[#cfcece]  hover:shadow-[#626161] ">
          <span className="text-3xl font-extrabold">←</span>
        </button>

        <div className="flex py-4">
          {FoodData.map((food) => (
            <Circlecard key={food.id} name={food.name} image={food.image} />
          ))}
        </div>

        
        <button className="relative mr-45 px-3 bg-white my-20 mb-24 pb-1  rounded-full shadow-[0_0_5px_rgba(255,255,255,0.9)]  shadow-[#cfcece] hover:shadow-[#626161] ">
          <span className="text-3xl font-extrabold">→</span>
        </button>
        
      </div>
    </div>
  );
};

export default Carousel;
