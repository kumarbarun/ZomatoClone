import Carousel from "../components/Carousels/Carousel";
import FoodCardRoute from "../components/Cards/CardRoutes/FoodCardRoute";

const Home = () => {
  return (
    <div className="">
      <div className="flex space-x-4 justify-end mr-45 my-4">
        <button className="border px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          Filters
        </button>

        <button className="border px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          Pure Veg
        </button>

        <button className="border px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          Cuisines ▼
        </button>
      </div>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <FoodCardRoute />
      </div>
    </div>
  );
};

export default Home;
