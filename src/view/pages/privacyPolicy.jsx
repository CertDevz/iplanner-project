import React from 'react';
import Header from '../components/header';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-8">
        Política de Privacidade
      </h1>
      <div className="prose max-w-full mx-auto">
        <p>
          Bem-vindo à nossa plataforma de educação digital. Valorizamos sua
          privacidade e estamos comprometidos em proteger seus dados pessoais.
          Esta Política de Privacidade explica como coletamos, usamos e
          protegemos suas informações.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          1. Informações que Coletamos
        </h2>
        <p>
          Coletamos informações pessoais, como nome, e-mail e dados de
          navegação, quando você se inscreve em nossos serviços ou interage com
          nossa plataforma.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          2. Como Usamos Suas Informações
        </h2>
        <p>
          Utilizamos suas informações para fornecer, melhorar e personalizar
          nossos serviços, bem como para comunicar com você sobre atualizações e
          promoções.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          3. Compartilhamento de Informações
        </h2>
        <p>
          Não vendemos, trocamos ou transferimos suas informações pessoais para
          terceiros. Podemos compartilhar seus dados com parceiros de confiança
          para melhorar nossos serviços.
        </p>
        <h2 className="text-2xl font-semibold mt-8">4. Segurança dos Dados</h2>
        <p>
          Implementamos medidas de segurança para proteger seus dados contra
          acesso não autorizado, alteração ou divulgação.
        </p>
        <h2 className="text-2xl font-semibold mt-8">5. Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais a qualquer momento. Entre em contato conosco para exercer
          esses direitos.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          6. Alterações na Política de Privacidade
        </h2>
        <p>
          Podemos atualizar nossa Política de Privacidade periodicamente.
          Notificaremos sobre qualquer alteração através de nossos canais de
          comunicação.
        </p>
        <h2 className="text-2xl font-semibold mt-8">Contato</h2>
        <p>
          Para dúvidas ou preocupações sobre nossa Política de Privacidade,
          entre em contato conosco pelo e-mail:
          <a href="mailto:contato@iplanner.net.br" className="text-blue-600">
          contato@iplanner.net.br
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
