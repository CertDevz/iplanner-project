export default function Impact() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-40">
      <div className=" flex flex-col md:items-center justify-center flex-1 mb-10 md:mb-0">
        <div className="flex items-center gap-10 justify-center">
          <img src="/public/light.png" alt="light" width={140} />
          <h1 className="font-semibold cursor-pointer px-20 py-2 bg-[#db2777] rounded-sm text-white text-center md:text-3xl text-2xl">
            Nossa Ideia
          </h1>
        </div>
        <div className="flex flex-col gap-5 mt-12 w-[900px]">
          <p className="text-white text-xl tracking-wide">
            Apresentamos uma plataforma integrada que apoia o estudante em todas
            as etapas de sua trajetória acadêmica e profissional, desde a
            formação inicial até a gestão de carreira. Nosso portfólio inclui
            serviços e produtos que potencializam o desenvolvimento contínuo e
            eficiente.
          </p>
          <p className="text-white text-xl tracking-wide">
            A iplanner é uma
            <strong className="text-[#db2777]">SOLUÇÃO EDUCACIONAL</strong>{" "}
            dedicada a democratizar o acesso à educação de qualidade na área da
            saúde.Através de soluções inovadoras e eficientes,auxiliamos
            instituições de ensino,professores e alunos em todas as etapas da
            jornada educacional.
          </p>
        </div>
      </div>
      <img src="/public/medica.png" alt="medica" className="hidden md:block" />
    </div>
  );
}
