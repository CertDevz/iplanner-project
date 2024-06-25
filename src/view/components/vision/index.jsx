import React from "react";
import { motion, useInView } from "framer-motion";

export default function Vision() {
  const ref2 = React.useRef(null);

  const inView2 = useInView(ref2, { triggerOnce: true });

  return (
    <div className="flex flex-col md:flex-row gap-5 md:mt-16 mb-10 md:mb-0 items-center  ">
      <div className="flex flex-col max-w-[900px] mx-auto mt-10 items-center">
        <h1 className="font-semibold px-5 py-2 bg-[#db2777] rounded-sm text-white text-center md:text-5xl text-2xl">
          Essa é a visão da iplanner!
        </h1>
        <motion.p
          ref={ref2}
          className="md:text-2xl md:mt-10 max-w-[600px] text-center mt-5 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Somos uma <strong>SOLUÇÃO EDUCACIONAL</strong> que está democratizando
          o acesso à educação de qualidade na área da saúde. Através de soluções
          completas e personalizadas, auxiliamos instituições de ensino,
          professores e alunos em todas as etapas da formação.
        </motion.p>
      </div>
      <img src="/public/medicos-visao.png" alt="" className="hidden md:block" />
    </div>
  );
}
