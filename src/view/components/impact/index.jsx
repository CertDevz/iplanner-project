import React from "react";
import { motion, useInView } from "framer-motion";

export default function Impact() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);

  const inView1 = useInView(ref1, { triggerOnce: true });
  const inView2 = useInView(ref2, { triggerOnce: true });
  const inView3 = useInView(ref3, { triggerOnce: true });
  const inView4 = useInView(ref4, { triggerOnce: true });
  const inView5 = useInView(ref5, { triggerOnce: true });

  return (
    <div className="mt-16">
      <div>
        <motion.span
          ref={ref1}
          className="bg-pink-600 text-white md:text-2xl text-xl p-2 rounded-sm"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <strong>Essa é a visão da</strong> iplanner!
        </motion.span>
      </div>
      <div className="flex max-w-[90%] mx-auto mt-10">
        <motion.p
          ref={ref2}
          className="text-white md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Somos uma <strong>SOLUÇÃO EDUCACIONAL</strong> que está democratizando
          o acesso à educação de qualidade na Nosso impacto: área da saúde.
          Através de soluções completas e personalizadas, auxiliamos
          instituições de ensino, professores e alunos em todas as etapas da
          formação.
        </motion.p>
      </div>
      <div className="mt-10">
        <motion.span
          ref={ref3}
          className="bg-pink-600 text-white md:text-2xl text-xl p-2 rounded-sm font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Nosso impacto:
        </motion.span>
      </div>
      <div className="flex justify-between">
        <div>
          <motion.div
            ref={ref4}
            className="flex max-w-[90%] mx-auto mt-10 flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white md:text-2xl text-xl font-semibold">
              Aumentamos as chances de sucesso dos alunos:
            </h1>
            <ul className="mt-5">
              <li className="flex gap-2 text-white md:text-2xl text-xl items-start mt-2">
                <img src="/src/view/assets/vector.svg" width={20} />
                Melhoramos o desempenho acadêmico.
              </li>
              <li className="flex gap-2 text-white md:text-2xl text-xl items-start mt-2">
                <img src="/src/view/assets/vector.svg" width={20} />
                Aumentamos as taxas de aprovação em exames e concursos.
              </li>
              <li className="flex gap-2 text-white md:text-2xl text-xl items-start mt-2">
                <img src="/src/view/assets/vector.svg" width={20} />
                Facilitamos a entrada no mercado de trabalho.
              </li>
            </ul>
          </motion.div>
          <motion.div
            ref={ref5}
            className="flex max-w-[90%] mx-auto mt-10 flex-col mb-5 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-2xl font-semibold">
              Aprimoramos a qualidade da educação na área da saúde:
            </h1>
            <ul className="mt-5">
              <li className="flex gap-2 text-white text-xl mt-2 items-start">
                <img src="/src/view/assets/vector.svg" width={20} />
                Oferecemos aos professores ferramentas e recursos para melhorar
                suas aulas.
              </li>
              <li className="flex gap-2 text-white text-xl mt-2 items-start">
                <img src="/src/view/assets/vector.svg" width={20} />
                Auxiliamos as instituições de ensino a desenvolverem programas
                educacionais mais eficazes.
              </li>
              <li className="flex gap-2 text-white text-xl mt-2 items-start">
                <img src="/src/view/assets/vector.svg" width={20} />
                Contribuímos para a formação de profissionais da saúde mais
                qualificados e preparados para os desafios do mercado.
              </li>
            </ul>
          </motion.div>
        </div>
        <img
          src="/src/view/assets/medico.png"
          alt="medico"
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
