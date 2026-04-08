import { useState } from "react";
import { motion } from "framer-motion";
import cert1 from "../assets/images/certificate1.jpg";
import cert2 from "../assets/images/certificate2.jpg";
import cert3 from "../assets/images/certificate3.jpg";
import cert4 from "../assets/images/certificate4.jpg";
import cert5 from "../assets/images/certificate5.jpg";
import cert6 from "../assets/images/certificate6.jpg";
import cert7 from "../assets/images/certificate7.jpg";
import internship from "../assets/images/internship1.jpg";

export default function Certificates(){

  const certificates = [
    { title:"Python", issuer:"Skill Vertex", image:cert1 },
    { title:"Applied AI Certificate", issuer:"TechSaksham", image:cert2 },
    { title:"Web Development Certificate", issuer:"IBM", image:cert3 },
    { title:"Cyber Security Certificate", issuer:"IBM", image:cert4 },
    { title:"Java Programming", issuer:"edX", image:cert5 },
    { title:"Machine Learning", issuer:"Simplilearn", image:cert6 },
    { title:"Artificial Intelligence", issuer:"EduBridge", image:cert7 },
    { title:"Python Internship", issuer:"Skill Vertex", image:internship }
  ];

  const [active, setActive] = useState(certificates[0]);

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        
        <h2 className="text-4xl font-bold text-center mb-12">
          Certificates <span className="text-purple-700">& Internships</span>
        </h2>

        
        <motion.div
          key={active.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10"
        >
          <img
            src={active.image}
            className="w-full h-[350px] object-contain bg-gray-100"
          />

          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">{active.title}</h3>
            <p className="text-gray-500 mt-1">{active.issuer}</p>

            <a
              href={active.image}
              target="_blank"
              className="inline-block mt-4 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800"
            >
              View Full Certificate
            </a>
          </div>
        </motion.div>

        
        <div className="flex gap-4 overflow-x-auto pb-2">

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(cert)}
              className={`min-w-[140px] cursor-pointer rounded-xl overflow-hidden border-2 
                ${active.title === cert.title ? "border-purple-600" : "border-transparent"}
              `}
            >
              <img
                src={cert.image}
                className="w-full h-28 object-cover"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}