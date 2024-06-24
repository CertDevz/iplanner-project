import React from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);

  const inView2 = useInView(ref2, { triggerOnce: true });
  const inView3 = useInView(ref3, { triggerOnce: true });
  const inView4 = useInView(ref4, { triggerOnce: true });
  const inView5 = useInView(ref5, { triggerOnce: true });

  return (
    <div
      className="h-[650px] md:h-[800px]  bg-gradient-to-br p-2 -mt-2 bg-white "
      style={{
        backgroundImage: 'url("/public/image-home.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex md:justify-end justify-center md:mt-36">
        <div className="z-50 absolute mt-2 md:mt-0">
          <div className="flex flex-col text-center">
            <motion.h1
              ref={ref2}
              className="md:text-5xl text-3xl text-white font-semibold"
              initial={{ opacity: 0, y: -50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              IMAGINE UM FUTURO ONDE:
            </motion.h1>
            <motion.span
              ref={ref3}
              className="md:text-3xl text-xl  font-semibold text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Acadêmicos e profissionais da saúde:
            </motion.span>
          </div>
          <div className="flex flex-col md:mt-16 mt-10 gap-4 p-2 md:w-[1000px]">
            <motion.span
              ref={ref4}
              className="bg-pink-600 md:text-2xl text-lg text-white font-semibold p-4 rounded-sm w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              01 - Tenham acesso à educação de qualidade que merecem,
              independentemente de sua renda ou localização.
            </motion.span>
            <motion.span
              ref={ref5}
              className="bg-pink-600 md:text-2xl text-lg text-white font-semibold p-4 rounded-sm md:w-2/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              02 - Estão equipados com as ferramentas e o conhecimento para
              alcançar seus objetivos mais ambiciosos.
            </motion.span>
            <motion.span
              className="bg-pink-600 md:text-2xl text-lg text-white font-semibold p-4 rounded-sm md:w-2/4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              03 - Fazem a diferença na vida de seus pacientes e na sociedade
              como um todo.
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
