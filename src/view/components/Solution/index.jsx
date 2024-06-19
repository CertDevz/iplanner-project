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
      className="flex flex-col w-full mx-auto items-center p-2 mt-10 "
    >
      <div className="flex items-center gap-5">
        <h1 className="text-white md:text-6xl text-3xl font-semibold">
          Solução do problema
        </h1>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Brain size={80} color="#E74490" />
        </motion.div>
      </div>
      <div className="flex flex-col max-w-[90%] mx-auto mt-10">
        <motion.div
          ref={ref2}
          className="md:mt-16 flex flex-col md:flex-row md:items-center md:gap-5 mt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <ClipboardPenLine size={40} color="#5FD3F6" />
          <p className="text-white md:text-2xl text-lg">
            <strong className="text-[#E74490]">Soluções Completas:</strong>{" "}
            Acompanhamos o aluno em todas as etapas da formação, desde a
            orientação de carreira até o apoio à publicação de artigos
            científicos.
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
            <strong className="text-[#E74490]">Plataforma Inovadora:</strong>{" "}
            Experiência de aprendizado otimizada, eficaz e acessível a todos.
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
            <strong className="text-[#E74490]">Preços Acessíveis:</strong>{" "}
            Democratizamos o acesso à educação de qualidade, tornando-a
            acessível a todos os profissionais da saúde.
          </p>
        </motion.div>
        <div className="md:mt-16 flex flex-col md:flex-row md:items-center md:gap-5 mt-10 mb-10">
          <HeartHandshake size={40} color="#5FD3F6" />
          <p className="text-white md:text-2xl text-xl">
            <strong className="text-[#E74490]">
              Atendimento Personalizado:
            </strong>{" "}
            Equipe experiente e qualificada oferece suporte individualizado e
            humanizado.
          </p>
        </div>
      </div>
    </div>
  );
}
