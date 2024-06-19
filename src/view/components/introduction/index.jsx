import React from "react";
import { motion, useInView } from "framer-motion";
import { HandHeart, Lightbulb } from "lucide-react";

export default function Introduction() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const inView1 = useInView(ref1, { triggerOnce: true });
  const inView2 = useInView(ref2, { triggerOnce: true });
  const inView3 = useInView(ref3, { triggerOnce: true });
  const inView4 = useInView(ref4, { triggerOnce: true });

  return (
    <div className="flex flex-col w-full mx-auto items-center bg-gradient-to-br from-purple-800 to-indigo-500 p-2">
      <motion.h1
        ref={ref1}
        className="text-white md:text-6xl text-4xl font-semibold mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Introdução
      </motion.h1>
      <div className="flex flex-col max-w-[90%] mx-auto mt-10">
        <div>
          <motion.div
            ref={ref2}
            className="md:mt-16 flex items-center gap-5"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <HandHeart size={40} color="#5FD3F6" />
            <span className="bg-pink-600 text-white md:text-2xl text-xl p-2 rounded-sm font-bold">
              Nossa empresa
            </span>
          </motion.div>
          <motion.p
            ref={ref3}
            className="text-white md:text-xl mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            A iplanner é uma <strong>SOLUÇÃO EDUCACIONAL</strong> dedicada a
            democratizar o acesso Nossa empresa à educação de qualidade na área
            da saúde. Através de soluções inovadoras e eficientes, auxiliamos
            instituições de ensino, professores e alunos em todas as etapas da
            jornada educacional.
          </motion.p>
        </div>
        <div className="mb-10">
          <motion.div
            ref={ref4}
            className="mt-16 flex items-center gap-5"
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Lightbulb size={40} color="#5FD3F6" />
            <span className="bg-pink-600 text-white md:text-2xl text-xl p-2 rounded-sm font-bold">
              Nossa ideia
            </span>
          </motion.div>
          <motion.p
            className="text-white md:text-xl mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apresentamos uma plataforma integrada que apoia o estudante em todas
            as etapas de sua trajetória acadêmica e profissional, desde a
            formação inicial até a gestão de carreira. Nosso portfólio inclui
            serviços e produtos que potencializam o desenvolvimento contínuo e
            eficiente.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
