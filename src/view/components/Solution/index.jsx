import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  CircleDollarSign,
  ClipboardPenLine,
  Globe,
  HeartHandshake,
} from "lucide-react";

export default function Solution() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const inView1 = useInView(ref1, { triggerOnce: true });
  const inView2 = useInView(ref2, { triggerOnce: true });
  const inView3 = useInView(ref3, { triggerOnce: true });
  const inView4 = useInView(ref4, { triggerOnce: true });

  return (
    <div
      id="solutions"
      className="flex flex-col w-full mx-auto items-center p-2 mt-10 mb-10 "
    >
      <div className="flex items-center gap-5 p-2">
        <h1 className="text-white md:text-6xl text-4xl font-semibold">
          Diferencial
        </h1>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Brain size={80} color="#E74490" className="hidden md:block" />
        </motion.div>
      </div>

      <div className="flex flex-col max-w-[90%] mx-auto mt-10">
        <p className="text-white md:text-xl text-lg mt-5">
          Na iplanner, nosso diferencial está na combinação única de
          acessibilidade, inovação e suporte contínuo que oferecemos aos nossos
          usuários. Não nos limitamos a fornecer conteúdos educacionais de alta
          qualidade; também focamos na preparação prática de carreira e no
          desenvolvimento profissional contínuo
        </p>
        <motion.div
          ref={ref2}
          className="md:mt-16 flex flex-col md:flex-row md:items-center md:gap-5 mt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <ClipboardPenLine size={40} color="#5FD3F6" />
          <p className="text-white md:text-2xl text-lg">
            <strong className="text-[#E74490]">Abordagem Personalizada:</strong>
            Entendemos que cada profissional tem necessidades e objetivos
            únicos. Nossos programas são adaptáveis e personalizados, garantindo
            que cada usuário receba o máximo benefício possível.
          </p>
        </motion.div>
        <motion.div
          ref={ref3}
          className="md:mt-16 flex flex-col md:flex-row md:items-center md:gap-5 mt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Globe size={40} color="#5FD3F6" />
          <p className="text-white md:text-2xl text-xl">
            <strong className="text-[#E74490]">Rede de Especialistas:</strong>{" "}
            Contamos com uma vasta rede de especialistas renomados que
            contribuem para a criação de nossos conteúdos, garantindo que nossas
            ofertas estejam sempre atualizadas e alinhadas com as melhores
            práticas da indústria.
          </p>
        </motion.div>
        <motion.div
          ref={ref4}
          className="md:mt-16 flex flex-col md:flex-row md:items-center md:gap-5 mt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <CircleDollarSign size={40} color="#5FD3F6" />
          <p className="text-white md:text-2xl text-xl">
            <strong className="text-[#E74490]">Suporte Contínuo:</strong> Nossa
            equipe de suporte está sempre disponível para ajudar nossos usuários
            a superar quaisquer desafios, garantindo que eles possam focar
            totalmente no aprendizado e desenvolvimento de suas carreiras.
          </p>
        </motion.div>
        <p className="text-white md:text-xl text-lg mt-10">
          Com esses diferenciais, a iplanner se posiciona como a escolha ideal
          para acadêmicos e profissionais da saúde que buscam não apenas
          conhecimento, mas também uma plataforma que os acompanhe em todas as
          etapas de sua jornada profissional. Confie na iplanner para ser seu
          parceiro na construção de um futuro de sucesso e inovação na área da
          saúde.
        </p>
      </div>
    </div>
  );
}
