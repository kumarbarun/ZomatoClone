import { React, useState } from "react";
import CircleCard from "../Cards/CardsTemplate/CircleCard";
import CircleData from "../Cards/CardData/CircleData";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const visible = 6;

  const previousSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current < CircleData.length - visible) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="bg-gray-100 relative py-8">
      <h2 className="text-2xl font-bold py-4 text-center">
        Inspiration for your first order
      </h2>
      <div className="w-full flex justify-center items-center space-x-4  ">
        <button
          className={` px-3 py-2 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.9)] hover:shadow-[#626161] z-10 bg-white ${
            current === 0
            ? "opacity-70 cursor-not-allowed"
            : "hover:shadow-[#626161] "
          }`}
          onClick={previousSlide}
        >
          <span className="text-3xl font-extrabold">←</span>
        </button>

        <div className="w-[80%] overflow-hidden">
          <div
            className="flex py-4 transition ease-out duration-400 "
            style={{
              transform: `translateX(-${(current * 100) / visible}%)`,
            }}
          >
            {CircleData.map((food) => (
              <div
                className={`relative w-[calc(100%/${visible})] flex-shrink-0`}
                key={food.id}
              >
                <CircleCard name={food.name} image={food.image} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`px-3 py-2 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.9)] z-10 bg-white ${
            current === CircleData.length-visible
              ? "opacity-70 cursor-not-allowed"
              : "hover:shadow-[#626161] "
          }`}
          onClick={nextSlide}
        >
          <span className="text-3xl font-extrabold">→</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
