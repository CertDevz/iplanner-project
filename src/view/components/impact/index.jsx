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
    <div className="mt-16 mb-10 md:mb-0 ">
      <div>
        <motion.span
          ref={ref1}
          className="bg-pink-600 text-white md:text-2xl text-2xl p-2 rounded-md font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Visão
        </motion.span>
      </div>
      <div className="flex max-w-[90%] mx-auto mt-10">
        <motion.p
          ref={ref2}
          className="text-white md:text-xl text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Nossa visão é ser a plataforma líder em educação e desenvolvimento de
          carreira na área da saúde, reconhecida pela excelência em oferecer
          conteúdos atualizados e relevantes. Aspiramos a criar um ecossistema
          onde a aprendizagem contínua e o desenvolvimento profissional são
          facilitados, contribuindo para a formação de profissionais altamente
          qualificados e preparados para transformar a área da saúde
          globalmente.
        </motion.p>
      </div>
      <div className="mt-10">
        <motion.span
          ref={ref3}
          className="bg-pink-600 text-white md:text-2xl text-2xl p-2 rounded-md font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Valores
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
            <ul className=" flex flex-col gap-3 mt-5">
              <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={20} className="mt-1" />
                <p>
                  <strong>Acessibilidade:</strong> Compromisso em tornar a
                  educação de qualidade acessível a todos, independentemente de
                  localização ou situação financeira.
                </p>
              </li>
              <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={20} className="mt-1" />
                <p>
                  <strong>Inovação:</strong> Promoção de uma cultura de inovação
                  contínua, buscando sempre novas formas de ensinar e aprender.
                </p>
              </li>
              <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={20} className="mt-1" />
                <p>
                  <strong>Excelência:</strong> Dedicação à excelência em todos
                  os aspectos, desde o conteúdo oferecido até o suporte ao
                  usuário.
                </p>
              </li>
              <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={20} className="mt-1" />
                <p>
                  <strong>Colaboração:</strong> Valorização do trabalho em
                  equipe e da colaboração entre profissionais, acadêmicos e
                  instituições para alcançar objetivos comuns.
                </p>
              </li>
              <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={20} className="mt-1" />
                <p>
                  <strong>Atualização Contínua:</strong> Encorajamento ao
                  aprendizado contínuo e à atualização constante de
                  conhecimentos para se manter à frente das mudanças e avanços
                  na área da saúde.Encorajamento ao aprendizado contínuo e à
                  atualização constante de conhecimentos para se manter à frente
                  das mudanças e avanços na área da saúde.
                </p>
              </li>
              <li className="flex gap-2 text-white md:text-xl text-lg items-start mt-2">
                <img src="/vector.svg" width={20} className="mt-1" />
                <p>
                  <strong>Integridade:</strong> Compromisso com a ética,
                  transparência e honestidade em todas as nossas ações e
                  interações.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
        <img src="/medico.png" alt="medico" className="hidden md:block" />
      </div>
    </div>
  );
}
