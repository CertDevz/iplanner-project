import { Construction } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';

export default function ConstructionPage() {
  const iplanner = <span id="title-iplanner">iplanner</span>;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <Construction className="text-purple-600 w-24 h-24 mx-auto" />

          <h1 className="text-3xl font-semibold mt-6">Em Construção</h1>

          <p className="text-lg text-gray-800 mt-4">
            Estamos trabalhando para trazer conteúdo incrível em breve!
          </p>

          <p className="text-lg text-gray-800 mt-4">
            Enquanto isso, aqui está um breve resumo do que esperar:
          </p>

          <p className="text-lg text-gray-800 mt-4">
            A {iplanner} surgiu da necessidade identificada de melhorar o acesso
            à educação e à preparação de carreira em um mundo em constante
            transformação. Estudos demonstram que muitos profissionais da saúde
            e acadêmicos enfrentam desafios significativos na atualização de
            conhecimentos e no desenvolvimento de carreiras. Visando resolver
            essas lacunas, idealizou-se uma solução que torna a educação mais
            acessível e abrangente. Nosso foco vai além do conteúdo, incluindo a
            preparação de carreira para acadêmicos e pós-graduandos, bem como a
            constante atualização dos profissionais da saúde. Com essa visão, a
            &nbsp;{iplanner} se dedica a capacitar a próxima geração de líderes
            e inovadores, fornecendo as ferramentas e recursos necessários para
            enfrentar os desafios do presente e do futuro na área da saúde.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
