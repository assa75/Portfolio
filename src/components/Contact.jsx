import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(){

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

     
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get In <span className="text-purple-700">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

       
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <h3 className="text-2xl font-semibold">
              Let’s connect 🤝
            </h3>

            <p className="text-gray-600">
              I’m open to opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>

            
            <div className="space-y-4">

              <div className="flex items-center gap-4 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow border">
                <FaEnvelope className="text-purple-600 text-xl"/>
                <span>assapanda75@gmail.com</span>
              </div>

              {/* <div className="flex items-center gap-4 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow border">
                <FaPhone className="text-purple-600 text-xl"/>
                <span>+91 XXXXX XXXXX</span>
              </div> */}

              <div className="flex items-center gap-4 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow border">
                <FaMapMarkerAlt className="text-purple-600 text-xl"/>
                <span>Andhra Pradesh, India</span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border"
          >

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required/>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required/>

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required/>

              <button
                className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition transform hover:scale-105"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}