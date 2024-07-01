export default function ParaQuem() {
  return (
    <div
      id="para-quem"
      className="flex flex-col min-h-screen mt-10 max-w-[90%] mx-auto"
    >
      <div className="flex items-center justify-center   bg-gray-100 rounded-lg shadow-2xl mt-24 h-[850px] md:h-full">
        <div className=" flex flex-col md:items-start justify-center  mb-10 md:mb-0">
          <h1 className="font-semibold  px-20 py-2 bg-[#db2777] rounded-sm text-white text-center md:text-3xl text-2xl">
            Para quem
          </h1>
          <div className="mt-10 flex flex-col p-2">
            <h2 className=" text-xl font-semibold">Profissionais da Saúde:</h2>
            <ul className="mt-5 max-w-[90%] mx-auto flex flex-col gap-7">
              <li className="flex gap-2  md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={17} className="mt-1" />
                <p className="tracking-wide text-xl">
                  Mantemos você sempre atualizado com os últimos avanços e
                  conhecimentos, garantindo que você esteja pronto para
                  enfrentar qualquer desafio no campo da saúde.
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex flex-col p-2">
            <h2 className=" text-xl font-semibold">
              Acadêmicos e Pós-graduandos:
            </h2>
            <ul className="mt-5 max-w-[90%] mx-auto flex flex-col gap-7">
              <li className="flex gap-2  md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={17} className="mt-1" />
                <p className="tracking-wide text-xl">
                  Oferecemos recursos que preparam você para os desafios do
                  mercado de trabalho e ajudam a destacar sua carreira acadêmica
                  e profissional. Você terá acesso a uma educação acessível e de
                  qualidade, focada não só no conteúdo, mas também na sua
                  preparação profissional.
                </p>
              </li>
            </ul>
          </div>
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
