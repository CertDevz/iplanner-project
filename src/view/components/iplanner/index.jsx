import { motion } from "framer-motion";
export default function Iplanner() {
  return (
    <div className="sm:flex items-center gap-10 p-2 md:h-[700px]">
      <motion.h2
        className="text-5xl sm:text-8xl text-white font-medium md:hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        iplanner
      </motion.h2>
      <motion.img
        src="/medicos-grup.png"
        width={800}
        alt="medicos-grup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <div className="flex flex-col mt-10 sm:mt-0">
        <div className="flex items-center gap-5">
          <motion.img
            className="hidden sm:block"
            src="/icon.svg"
            alt="icon iplanner"
            width={100}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.h1
            className=" text-5xl sm:text-8xl text-white font-medium hidden sm:block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            iplanner
          </motion.h1>
        </div>
        <motion.span
          className="bg-[#e7449045] flex sm:px-3 sm:py-3 text-center p-1 text-white rounded-sm sm:mt-2 font-medium self-end -mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Soluções educacionais para um mundo em transformação.
        </motion.span>
      </div>
    </div>
  );
}
