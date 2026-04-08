import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp,FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 relative">

      {/* TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Assa's Portfolio
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Thanks for visiting my portfolio. I'm passionate about building modern web apps and solving real-world problems.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            {["home","about","skills","projects","contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item}`}
                  className="hover:text-white transition relative group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}

                  {/* underline animation */}
                  <span className="block h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Connect With Me
          </h3>

          <div className="flex gap-5 text-2xl">

            {[{
              icon: <FaGithub />,
              link: "https://github.com/assa75"
            },{
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/assa-panda-78151931a"
            },{
                icon: <FaInstagram />,
                link: "https://instagram.com/mythri_panda16"
            },{
              icon: <FaEnvelope />,
              link: "mailto:assapanda75@gmail.com"
            }].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-purple-400 transition"
              >
                {item.icon}
              </motion.a>
            ))}

          </div>
        </div>

      </div>

      {/* BACK TO TOP BUTTON */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.2 }}
        className="fixed bottom-6 right-6 bg-purple-700 p-3 rounded-full shadow-lg hover:bg-purple-800 transition"
      >
        <FaArrowUp />
      </motion.a>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Assa Panda • Crafted with ❤️ using Tailwind CSS
      </div>

    </footer>
  );
}