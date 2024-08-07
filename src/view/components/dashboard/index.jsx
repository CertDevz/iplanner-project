import { motion } from "framer-motion";
import { isMobile, isSafari } from "react-device-detect";

export default function Dashboard() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-5 md:h-screen -mt-[300px] md:mt-0"
    >
      <div className="flex flex-col items-center">
        <motion.h2
          id="title-iplanner"
          className="text-8xl font-medium md:hidden bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text md:mt-5 mt-96"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          iplanner
        </motion.h2>
        {isMobile ? (
          <motion.img
            src="/medicos-home.png"
            alt="medicos-grup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        ) : (
          <motion.img
            src="/medicos-home.png"
            alt="medicos-grup"
            className={`${
              isSafari
                ? "object-cover w-full md:max-w-[980px] md:mt-60 h-screen md:h-[100%]"
                : "object-cover w-full md:max-w-[980px] md:mt-40 h-screen md:h-[100%]"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )}
      </div>

      <div className="flex flex-col items-center p-2">
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
            id="title-iplanner"
            className="text-4xl 2xl:text-9xl md:text-8xl font-medium hidden sm:block bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            iplanner
          </motion.h1>
        </div>
        <motion.span
          className="hidden md:block font-semibold text-center text-xl px-5 py-2 bg-[#db2777] rounded-sm text-white md:mt-20 -mt-10"
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
