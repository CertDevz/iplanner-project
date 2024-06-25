import Footer from "../footer";
import Header from "../header";

export default function WeAre() {
  return (
    <div>
      <Header />

      <div className="flex max-w[90%] mx-auto mt-10">
        <h1 className="font-semibold  px-20 py-2 bg-[#db2777] rounded-sm text-white  md:text-3xl text-2xl">
          Quem somos
        </h1>
      </div>

      <div className="flex flex-col  mt-12 ">
        <div
          className="w-full"
          style={{
            background:
              "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
          }}
        >
          <h2 className="font-bold text-lg text-white bg-[#db2777] inline-block px-2 py-1 rounded-sm">
            Sobre Nós
          </h2>
          <p className="text-xl tracking-wide bg-gradient-to-br text-white mt-2 p-5">
            A iplanner surgiu da necessidade identificada de melhorar o acesso à
            educação e à preparação de carreira em um mundo em constante
            transformação. Estudos demonstram que muitos profissionais da saúde
            e acadêmicos enfrentam desafios significativos na atualização de
            conhecimentos e no desenvolvimento de carreiras. Visando resolver
            essas lacunas, idealizou-se uma solução que torna a educação mais
            acessível e abrangente. Nosso foco vai além do conteúdo, incluindo a
            preparação de carreira para acadêmicos e pós-graduandos, bem como a
            constante atualização dos profissionais da saúde. Com essa visão, a
            iplanner se dedica a capacitar a próxima geração de líderes e
            inovadores, fornecendo as ferramentas e recursos necessários para
            enfrentar os desafios do presente e do futuro na área da saúde.
          </p>
        </div>
        <div className="w-full ">
          <h2 className="font-bold text-lg text-white bg-[#db2777] inline-block px-2 py-1 rounded-sm">
            Missão
          </h2>
          <p className="text-xl tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text mt-2 p-5">
            Nossa missão é tornar a educação mais acessível e eficaz, oferecendo
            ferramentas e recursos que capacitem acadêmicos, pós-graduandos e
            profissionais da saúde a se atualizarem constantemente e a
            desenvolverem suas carreiras. Buscamos preencher lacunas no acesso
            ao conhecimento e na preparação de carreira, preparando líderes e
            inovadores para enfrentar os desafios do presente e do futuro na
            área da saúde.
          </p>
        </div>
        <div
          className="w-full "
          style={{
            background:
              "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
          }}
        >
          <h2 className="font-bold text-lg text-white bg-[#db2777] inline-block px-2 py-1 rounded-sm">
            Visão
          </h2>
          <p className="text-xl tracking-wide bg-gradient-to-br text-white mt-2 p-5">
            Nossa visão é ser a plataforma líder em educação e desenvolvimento
            de carreira na área da saúde, reconhecida pela excelência em
            oferecer conteúdos atualizados e relevantes. Aspiramos a criar um
            ecossistema onde a aprendizagem contínua e o desenvolvimento
            profissional são facilitados, contribuindo para a formação de
            profissionais altamente qualificados e preparados para transformar a
            área da saúde globalmente.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg text-white bg-[#db2777] inline-block px-2 py-1 rounded-sm">
            Valores
          </h2>
          <ul className="max-w-[90%] mx-auto mt-5 flex flex-col gap-5">
            <li className="flex items-start gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
              <img src="/public/vector.svg" alt="" width={15} />
              Acessibilidade: Compromisso em tornar a educação de qualidade
              acessível a todos, independentemente de localização ou situação
              financeira
            </li>
            <li className="flex items-start gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
              <img src="/public/vector.svg" alt="" width={15} />
              Inovação: Promoção de uma cultura de inovação contínua, buscando
              sempre novas formas de ensinar e aprender.
            </li>
            <li className="flex items-start gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
              <img src="/public/vector.svg" alt="" width={15} />
              Excelência: Dedicação à excelência em todos os aspectos, desde o
              conteúdo oferecido até o suporte ao usuário.
            </li>
            <li className="flex items-start gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
              <img src="/public/vector.svg" alt="" width={15} />
              Colaboração: Valorização do trabalho em equipe e da colaboração
              entre profissionais, acadêmicos e instituições para alcançar
              objetivos comuns.
            </li>
            <li className="flex items-start gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
              <img src="/public/vector.svg" alt="" width={15} />
              Atualização Contínua: Encorajamento ao aprendizado contínuo e à
              atualização constante de conhecimentos para se manter à frente das
              mudanças e avanços na área da saúde.
            </li>
            <li className="flex items-start gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold mb-10">
              <img src="/public/vector.svg" alt="" width={15} />
              Integridade: Compromisso com a ética, transparência e honestidade
              em todas as nossas ações e interações.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
