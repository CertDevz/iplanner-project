import React from "react";
import { motion, useInView } from "framer-motion";

export default function Solution() {
  const ref2 = React.useRef(null);

  const inView2 = useInView(ref2, { triggerOnce: true });

  return (
    <div
      className="flex flex-col md:flex-row gap-5 mb-0 p-2 md:p-0 "
      style={{
        background:
          "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
      }}
    >
      <img src="/public/medicos-visao.png" alt="" className="hidden md:block" />
      <div className="flex flex-col max-w-[900px] mx-auto md:mt-10 items-center mb-10">
        <h1 className="font-semibold px-5 py-2 bg-[#db2777] rounded-sm text-white text-center md:text-3xl text-2xl -mt-2 md:mt-0">
          Serviço de Gestão de Eventos Completo para a iplanner
        </h1>
        <div className="flex items-center gap-5 mt-10">
          <img src="/services/brain.png" alt="brain" width={70} />
          <motion.p
            ref={ref2}
            className="text-white md:text-xl tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <strong>Abordagem Personalizada:</strong> Adaptamos o serviço às
            necessidades específicas de cada evento, considerando o
            público-alvo, os objetivos, o orçamento e as características do
            local.
          </motion.p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <img src="/services/especialist.png" alt="especialist" width={70} />
          <motion.p
            ref={ref2}
            className="text-white md:text-xl tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <strong>Equipe Especializada:</strong> Contamos com uma equipe
            multidisciplinar de profissionais experientes em gestão de eventos,
            marketing, comunicação e logística.
          </motion.p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <img src="/services/tec.png" alt="tec" width={70} />
          <motion.p
            ref={ref2}
            className="text-white md:text-xl tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <strong>Tecnologia Avançada:</strong> Utilizamos plataformas
            digitais inovadoras para gerenciar inscrições, pagamentos,
            comunicação com os participantes e outras tarefas de forma eficiente
            e segura.
          </motion.p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <img src="/services/expert.png" alt="expert" width={70} />
          <motion.p
            ref={ref2}
            className="text-white md:text-xl tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <strong>Experiência em Diversos Segmentos:</strong> Possuímos
            expertise na organização de eventos em diversos segmentos da área da
            saúde, como congressos, cursos, workshops e palestras.
          </motion.p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <img src="/services/suport.png" alt="suport" width={70} />
          <motion.p
            ref={ref2}
            className="text-white md:text-xl tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <strong>Suporte Personalizado:</strong> Oferecemos suporte
            personalizado antes, durante e após o evento, para garantir que tudo
            corra conforme o planejado.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
