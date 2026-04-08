import profile from "../assets/images/img.jpg";
import { motion } from "framer-motion";
import resume from "../assets/images/Assa_Panda_Resume.pdf"
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-purple-700">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

         
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <div className="absolute w-72 h-96 bg-purple-300 rounded-xl blur-2xl opacity-30"></div>

            <motion.img
              src={profile}
              alt="Assa Panda"
              className="relative w-72 h-96 object-cover rounded-2xl shadow-2xl border border-white"
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

         
          <motion.div
            className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi! I'm a developer who loves turning ideas into interactive web
              experiences using <span className="font-semibold text-purple-700">HTML, CSS, JavaScript, and React</span>.

              <br /><br />

              I also enjoy working on backend logic using <span className="font-semibold text-purple-700">Java</span> and building APIs
              with <span className="font-semibold text-purple-700">Spring Boot</span>.

              <br /><br />

              I enjoy solving problems and creating clean, user-friendly interfaces.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <MdEmail /> <span><b>Email:</b> assapanda75@gmail.com</span>
              </p>

              <p className="flex items-center gap-2">
                <IoLocationSharp /> <span><b>Location:</b> Andhra Pradesh, India</span>
              </p>
            </div>

            <motion.a
              href={resume}
              className="inline-block mt-8 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}