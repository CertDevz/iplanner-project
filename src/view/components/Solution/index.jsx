import React from "react";
import { motion, useInView } from "framer-motion";
import { solutionData } from "./mock";

const Section = ({ imgSrc, alt, title, description, ref2, inView2 }) => (
  <div className="flex items-center gap-5 mt-10">
    <img src={imgSrc} alt={alt} width={70} />
    <motion.p
      ref={ref2}
      className="text-white md:text-xl tracking-wide"
      initial={{ opacity: 0, y: 50 }}
      animate={inView2 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <strong>{title}:</strong> {description}
    </motion.p>
  </div>
);

export default function Solution() {
  const ref2 = React.useRef(null);
  const inView2 = useInView(ref2, { triggerOnce: true });

  return (
    <div
      className="flex flex-col md:flex-row gap-5 mb-0 p-2 md:p-0 h-screen"
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
        {solutionData.map((item, index) => (
          <Section
            key={index}
            imgSrc={item.imgSrc}
            alt={item.alt}
            title={item.title}
            description={item.description}
            ref2={ref2}
            inView2={inView2}
          />
        ))}
      </div>
    </div>
  );
}
