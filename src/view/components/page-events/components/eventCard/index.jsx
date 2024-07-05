import Counter from "../counter/index";
const EventCard = ({ id, title, price }) => {
  const numericPrice = Number(price);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-5 bg-gradient-to-r from-purple-800 to-indigo-500 shadow-lg rounded-md">
      <div>
        <h1 className=" text-white font-bold md:text-lg max-w-[550px] mb-5">
          {title}
        </h1>
        <span className="text-white font-bold">
          R$ {numericPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex gap-3 mt-5 md:mt-0">
        <span className="text-white font-bold">Quantidade</span>
        <div className="flex gap-4 text-white">
          <Counter id={id} price={numericPrice} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
