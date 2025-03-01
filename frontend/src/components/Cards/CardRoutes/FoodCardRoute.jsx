import FoodCard from "../CardsTemplate/Foodcard";
import ResturantData from "../CardData/ResturantData";

const FoodCardRoute = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-4 flex justify-center items-center">
        Resturant Near You
      </h2>

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
