import React from "react";
import { motion, useInView } from "framer-motion";
import { HandHeart, Lightbulb } from "lucide-react";

export default function Introduction() {
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const inView2 = useInView(ref2, { triggerOnce: true });
  const inView3 = useInView(ref3, { triggerOnce: true });
  const inView4 = useInView(ref4, { triggerOnce: true });

  return (
    <div className="flex flex-col w-full mx-auto items-center bg-gradient-to-br bg-white p-2">
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
            <span className="bg-pink-600 text-white md:text-2xl text-xl p-2 rounded-md font-bold">
              Sobre Nós
            </span>
          </motion.div>
          <motion.p
            ref={ref3}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-900 md:text-xl mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            A iplanner surgiu da necessidade identificada de melhorar o acesso à
            educação e à preparação de carreira em um mundo em constante
            transformação. Estudos demonstram que muitos profissionais da saúde
            e acadêmicos enfrentam desafios significativos na atualização de
            conhecimentos e no desenvolvimento de carreiras. Visando resolver
            essas lacunas, idealizou-se uma solução que torna a educação mais
            acessível e abrangente. <br /> <br /> Nosso foco vai além do
            conteúdo, incluindo a preparação de carreira para acadêmicos e
            pós-graduandos, bem como a constante atualização dos profissionais
            da saúde. Com essa visão, a iplanner se dedica a capacitar a próxima
            geração de líderes e inovadores, fornecendo as ferramentas e
            recursos necessários para enfrentar os desafios do presente e do
            futuro na área da saúde
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
            <span className="bg-pink-600 text-white md:text-2xl text-xl p-2 rounded-md font-bold">
              Missão
            </span>
          </motion.div>
          <motion.p
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-900 md:text-xl mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Nossa missão é tornar a educação mais acessível e eficaz, oferecendo
            ferramentas e recursos que capacitem acadêmicos, pós-graduandos e
            profissionais da saúde a se atualizarem constantemente e a
            desenvolverem suas carreiras. Buscamos preencher lacunas no acesso
            ao conhecimento e na preparação de carreira, preparando líderes e
            inovadores para enfrentar os desafios do presente e do futuro na
            área da saúde.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
