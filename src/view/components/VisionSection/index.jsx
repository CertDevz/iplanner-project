import React from "react";
import { motion, useInView } from "framer-motion";

export default function VisionSection() {
  const ref2 = React.useRef(null);

  const inView2 = useInView(ref2, { triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center md:flex-row gap-5 md:mt-16 mb-20 md:mb-0 md:h-screen">
      <div className="flex flex-col max-w-[900px] mx-auto mt-10 items-center">
        <h1 className="font-semibold px-5 py-2 bg-[#db2777] rounded-sm text-white  md:text-5xl text-2xl mt-10">
          Essa é a visão da <span id="title-iplanner">iplanner</span>!
        </h1>
        <motion.p
          ref={ref2}
          className="text-lg md:text-2xl md:mt-10 max-w-[900px] text-center mt-5 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text"
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
      <div>
        <img loading="lazy"
          src="/enfermeira.png"
          alt=""
          className="hidden xl:block h-screen object-cover "
        />
      </div>
    </div>
  );
}
