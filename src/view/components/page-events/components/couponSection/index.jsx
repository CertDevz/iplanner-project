const CouponSection = () => (
  <div className="flex flex-col px-4 py-5 max-w-[450px] bg-gradient-to-r from-purple-800 to-indigo-500 shadow-lg rounded-md">
    <span className="text-white font-bold">
      Tem um Cupom de Desconto/Acesso?
    </span>
    <div className="flex mt-2">
      <input
        type="text"
        className="md:px-3 md:py-3 px-2 focus:outline-none"
        placeholder="Informe seu cupom"
      />
      <button className="font-semibold cursor-pointer md:px-3 md:py-3 bg-[#db2777] rounded-sm text-white hover:bg-[#a1255d]">
        VALIDAR CUPOM
      </button>
    </div>
  </div>
);

export default CouponSection;
