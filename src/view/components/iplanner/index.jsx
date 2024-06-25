import { motion } from "framer-motion";
export default function Iplanner() {
  return (
    <div
      id="home"
      className="sm:flex items-center justify-between gap-5 md:h-[380px]"
    >
      <motion.h2
        className="text-6xl  font-medium md:hidden bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text mt-5 p-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        iplanner
      </motion.h2>

      <motion.img
        src="/medicos-home.png"
        width={700}
        alt="medicos-grup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="flex flex-col mt-10 sm:mt-0 flex-1 items-center">
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
            className="text-5xl sm:text-9xl font-medium hidden sm:block bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            iplanner
          </motion.h1>
        </div>
        <motion.span
          className=" font-semibold  px-5 py-2 bg-[#db2777] rounded-sm text-white justify-end md:mt-20 -mt-10"
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
