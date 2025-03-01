import RestroCard from "../CardsTemplate/RestroCard";
import RestroData from "../CardData/RestroData";

const RestroCardRoute = () => {
  return (
    <div className="flex flex-wrap justify-around mx-16">
      {RestroData.map((data) => {
        return (
          <RestroCard
            key={data.id}
            name={data.name}
            image={data.image}
            desc={data.desc}
          />
        );
      })}
    </div>
  );
};

export default RestroCardRoute;
