import profile from "../assets/images/img1.jpg";
import { motion } from "framer-motion";

export default function Hero() {

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const text = "Hi There 👋 I'm ";
  const name = "Assa Panda";

  return (
    <section
      id="home"
      className="w-full overflow-hidden pt-28 sm:pt-32 pb-10 min-h-screen flex items-start md:items-center
      bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-base sm:text-lg text-gray-600">
            Welcome to my portfolio
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight flex flex-wrap">

            {Array.from(text).map((char, i) => {
              if (char === "👋") {
                return (
                  <span key={i} className="block w-full">
                    <motion.span
                      custom={i}
                      variants={textVariant}
                      initial="hidden"
                      animate="visible"
                    >
                      {char}
                    </motion.span>
                  </span>
                );
              }

              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  className={char === " " ? "mr-2" : ""}
                >
                  {char}
                </motion.span>
              );
            })}

            {Array.from(name).map((char, i) => (
              <motion.span
                key={i + 100}
                custom={i + text.length}
                variants={textVariant}
                initial="hidden"
                animate="visible"
                className={`text-purple-700 ${char === " " ? "mr-2" : ""}`}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Software Developer
          </motion.h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            I love building modern web applications using React, JavaScript, Java and Spring Boot.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="w-full sm:w-auto text-center bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto text-center border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center relative mt-10 md:mt-0 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >

          {/* Glow */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
          bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400
          rounded-full blur-3xl opacity-30"></div>

          {/* Image */}
          <motion.img
            src={profile}
            alt="Assa Panda"
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80
            max-w-full object-cover rounded-full shadow-2xl border-4 border-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

      </div>
    </section>
  );
}