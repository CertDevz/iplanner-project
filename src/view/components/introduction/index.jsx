export default function Impact() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-40 mt-10 mb-10 md:mb-0 md:mt-0 md:h-screen">
      <div className=" flex flex-col md:items-center justify-center flex-1  md:mb-0">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <img
            src="/light.png"
            alt="light"
            className="md:w-[140px] w-[200px]"
          />
          <h1 className="font-semibold  px-20 py-2 bg-[#db2777] rounded-sm text-white text-center w-full md:text-3xl text-3xl">
            Nossa Ideia
          </h1>
        </div>
        <div className="flex flex-col gap-5 mt-12 max-w-[900px] p-2 ">
          <p className="text-xl tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
            Apresentamos uma plataforma integrada que apoia o estudante em todas
            as etapas de sua trajetória acadêmica e profissional, desde a
            formação inicial até a gestão de carreira. Nosso portfólio inclui
            serviços e produtos que potencializam o desenvolvimento contínuo e
            eficiente.
          </p>
          <p className="text-xl tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
            A iplanner é uma
            <strong className="text-[#db2777]"> SOLUÇÃO EDUCACIONAL </strong>
            dedicada a democratizar o acesso à educação de qualidade na área da
            saúde.Através de soluções inovadoras e eficientes,auxiliamos
            instituições de ensino,professores e alunos em todas as etapas da
            jornada educacional.
          </p>
        </div>
      </div>
      <img
        src="/medica-ideia.png"
        alt="medica"
        className="hidden md:block max-w-[900px]"
      />
    </div>
  );
}
