export default function ParaQuem() {
  return (
    <div
      id="para-quem"
      className="flex flex-col min-h-screen mt-10 max-w-[90%] mx-auto"
    >
      <div className="flex items-center justify-center   bg-gray-100 rounded-lg shadow-2xl mt-24 h-[700px] md:h-full">
        <div className="md:max-w-[50%] p-5 flex flex-col gap-10 text-center -mt-5">
          <h1 className="font-semibold px-5 py-2 bg-[#db2777] rounded-sm text-white  md:text-5xl text-2xl ">
            Profissionais da Saúde:
          </h1>

          <p className="text-lg text-gray-800 mt-4">
            Mantemos você sempre atualizado com os últimos avanços e
            conhecimentos, garantindo que você esteja pronto para enfrentar
            qualquer desafio no campo da saúde. Acadêmicos e Pós-graduandos:
            Oferecemos recursos que preparam você para os desafios do mercado de
            trabalho e ajudam a destacar sua carreira acadêmica e profissional.
            Você terá acesso a uma educação acessível e de qualidade, focada não
            só no conteúdo, mas também na sua preparação profissional.
          </p>
        </div>
        <img
          src="/enfermeira2.png"
          alt=""
          className="hidden xl:block h-screen object-cover  "
        />
      </div>
    </div>
  );
}
