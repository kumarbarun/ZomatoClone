// import Image from "../Assets/logo/background_login.jpg";

const FoodCard = ({name, image, desc, rate, price, dist}) => {
  return (
    <div className="card mt-4 w-90 h-80 rounded-3xl shadow-[0_0_5px_rgba(255,255,255,0.9)] hover:shadow-[#626161] transition-all duration-300">
      <img src={image} alt="Card" className="p-3 w-90 h-60 rounded-3xl" />
      <div className="relative flex flex-row font-bold">
        <p className="pl-4">{name}</p>
        <p className="absolute right-0 bg-green-600 h-auto w-auto mr-4 px-1 rounded-md text-white">{rate}</p>
      </div>
      <div className="relative flex flex-row mt-1 text-sm font-light text-slate-500">
        <p className="pl-4">{desc}</p>
        <p className="absolute top-0 right-4">{price}</p>
      </div>
      <div className="relative text-gray-900">
        <p className="absolute top-0 right-4 text-xs">{dist}</p>
      </div>
    </div>
  );
};

export default FoodCard;
