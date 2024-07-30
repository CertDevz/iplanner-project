import React from 'react';
import Header from '../components/header';

const TermsOfUse = () => {
  return (
    <div className="container mx-auto p-8">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-8">Termos de Uso</h1>
      <div className="prose max-w-full mx-auto">
        <p>
          Bem-vindo à nossa plataforma de educação digital. Ao acessar ou usar
          nossos serviços, você concorda com os seguintes Termos de Uso.
        </p>
        <h2 className="text-2xl font-semibold mt-8">1. Aceitação dos Termos</h2>
        <p>
          Ao acessar ou utilizar nossos serviços, você concorda em cumprir estes
          Termos de Uso. Se você não concordar com algum desses termos, não
          utilize nossos serviços.
        </p>
        <h2 className="text-2xl font-semibold mt-8">2. Uso da Plataforma</h2>
        <p>
          Você concorda em usar nossa plataforma de maneira ética e legal,
          respeitando todos os direitos autorais e de propriedade intelectual.
        </p>
        <h2 className="text-2xl font-semibold mt-8">3. Conta do Usuário</h2>
        <p>
          Ao criar uma conta, você é responsável por manter suas credenciais
          seguras e por todas as atividades realizadas em sua conta.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          4. Propriedade Intelectual
        </h2>
        <p>
          Todo o conteúdo da plataforma, incluindo textos, imagens e vídeos, é
          protegido por direitos autorais e não pode ser usado sem autorização.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          5. Isenção de Responsabilidade
        </h2>
        <p>
          Nossos serviços são fornecidos "como estão", sem garantias de qualquer
          tipo. Não nos responsabilizamos por qualquer dano direto ou indireto
          decorrente do uso da plataforma.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          6. Modificações dos Termos
        </h2>
        <p>
          Reservamo-nos o direito de alterar estes Termos de Uso a qualquer
          momento. A data da última atualização será indicada no início desta
          página.
        </p>
        <h2 className="text-2xl font-semibold mt-8">Contato</h2>
        <p>
          Para questões relacionadas aos Termos de Uso, entre em contato conosco
          pelo e-mail:
          <a href="mailto:contato@iplanner.net.br" className="text-blue-600">
            contato@iplanner.net.br
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
