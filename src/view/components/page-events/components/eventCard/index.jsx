import Counter from "../counter";

const EventCard = ({ id, title, price }) => {
  const numericPrice = Number(price);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-5 bg-gradient-to-br from-[#f3e3ff] to-[#d6d0ff] shadow-lg">
      <div>
        <h1 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold text-lg max-w-[550px]">
          {title}
        </h1>
        <span className="bg-gradient-to-br from-purple-400 to-indigo-500 text-transparent bg-clip-text font-bold">
          R$ {numericPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex gap-3 mt-5 md:mt-0">
        <span className="bg-gradient-to-br from-purple-400 to-indigo-500 text-transparent bg-clip-text font-bold">
          Quantidade
        </span>
        <div className="flex gap-4">
          <Counter id={id} price={numericPrice} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
