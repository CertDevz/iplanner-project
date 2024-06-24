export default function Impact() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-40">
      <img src="/public/medica.png" alt="medica" className="hidden md:block" />
      <div className=" flex flex-col md:items-start justify-center flex-1 mb-10 md:mb-0">
        <h1 className="font-semibold cursor-pointer px-20 py-2 bg-[#db2777] rounded-sm text-white text-center md:text-3xl text-2xl">
          Nosso Impacto
        </h1>
        <div className="mt-10 flex flex-col">
          <h2 className="text-white md:text-2xl font-semibold">
            Aumentamos as chances de sucesso dos alunos:
          </h2>
          <ul className="mt-2 max-w-[90%] mx-auto">
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p>Melhoramos o desempenho acadêmico.</p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p>Aumentamos as taxas de aprovação em exames e concursos .</p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p>Facilitamos a entrada no mercado de trabalho.</p>
            </li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col">
          <h2 className="text-white md:text-2xl font-semibold">
            Aprimoramos a qualidade da educação na área da saúde:
          </h2>
          <ul className="mt-2 max-w-[90%] mx-auto">
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p>
                Oferecemos aos professores ferramentas e recursos para melhorar
                suas aulas.
              </p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p>
                Auxiliamos as instituições de ensino a desenvolverem programas
                educacionais mais eficazes.
              </p>
            </li>
            <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
              <img src="/vector.svg" width={17} className="mt-1" />
              <p>
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
