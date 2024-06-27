export default function Impact() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between md:gap-40 md:h-screen -mt-12 md:mt-0"
      style={{
        background:
          "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
      }}
    >
      <img src="/enfermeiro.png" alt="medica" className="hidden 2xl:block" />
      <div className=" flex flex-col md:items-start justify-center  mb-10 md:mb-0">
        <h1 className="font-semibold  px-20 py-2 bg-[#db2777] rounded-sm text-white text-center md:text-3xl text-2xl">
          Nosso Impacto
        </h1>
        <div className="mt-10 flex flex-col p-2">
          <h2 className="text-white text-2xl font-semibold">
            Aumentamos as chances de sucesso dos alunos:
          </h2>
          <ul className="mt-5 max-w-[90%] mx-auto flex flex-col gap-7">
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p className="tracking-wide text-xl">
                Melhoramos o desempenho acadêmico.
              </p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p className="tracking-wide text-xl">
                Aumentamos as taxas de aprovação em exames e concursos .
              </p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p className="tracking-wide text-xl">
                Facilitamos a entrada no mercado de trabalho.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col p-2">
          <h2 className="text-white text-2xl font-semibold">
            Aprimoramos a qualidade da educação na área da saúde:
          </h2>
          <ul className="mt-5 max-w-[90%] mx-auto flex flex-col gap-7">
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p className="tracking-wide text-xl">
                Oferecemos aos professores ferramentas e recursos para melhorar
                suas aulas.
              </p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p className="tracking-wide text-xl">
                Auxiliamos as instituições de ensino a desenvolverem programas
                educacionais mais eficazes.
              </p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p className="tracking-wide text-xl">
                Contribuímos para a formação de profissionais da saúde mais
                qualificados e preparados para os desafios do mercado.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
