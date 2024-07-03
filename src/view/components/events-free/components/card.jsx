export default function Card({ title, subtitle, items }) {
  return (
    <div className="p-10">
      <div
        className="md:w-[500px] rounded-md p-5 max-h-[350px]"
        style={{
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.8)",
          background:
            "linear-gradient(to bottom right, #f3e3ff 20%, #d6d0ff 100%)",
        }}
      >
        <div className="text-center">
          <h1 className="font-bold text-xl">{title}</h1>
          <h2 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold text-lg">
            {subtitle}
          </h2>
          <span className="font-bold">Recursos Disponíveis</span>
        </div>
        <ul className="mt-5 font-bold">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
