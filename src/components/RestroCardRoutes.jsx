import FoodCard from "./Foodcard";
import RestroCard from "./RestroCard";
import ResturantData from "../data/ResturantData";
import Background from "../Assets/logo/grayBg.jpg";

const FoodCardRoute = () => {
  return (
    <div>
      <div
        className="h-48 "
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="">
        <RestroCard />
      </div>
      <div className="flex flex-wrap justify-around mx-4 sm:mx-32">
        {ResturantData.map((data) => {
          return (
            <FoodCard
              key={data.id}
              name={data.name}
              image={data.image}
              desc={data.desc}
              rate={data.rate}
              price={data.price}
              dist={data.dist}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodCardRoute;
