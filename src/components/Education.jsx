import { motion } from "framer-motion";
import college from "../assets/images/clg.jpg";
import school from "../assets/images/school.jpg";
import intermediate from "../assets/images/inter.jpg";

export default function Education() {

  const education = [
    {
      title:"B.Tech – Computer Science Engineering",
      college:"MIET Engineering College",
      year:"2022 – 2026",
      status:"Completed",
      image:college,
      highlight:"Currently focusing on Full Stack Development"
    },
    {
      title:"Intermediate (MPC)",
      college:"Vignana Durga Jr College",
      year:"2020 – 2022",
      status:"Completed",
      image:intermediate,
      highlight:"Strong foundation in Mathematics & Logic"
    },
    {
      title:"SSC",
      college:"Z.P High School",
      year:"2020",
      status:"Completed",
      image:school,
      highlight:"Built discipline and learning habits"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

      
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My <span className="text-purple-700">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* CARD CONTENT */}
              <div className="bg-white p-6">

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {item.college}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.year}
                </p>

                {/* Highlight */}
                <p className="mt-3 text-sm text-purple-700 font-medium">
                  {item.highlight}
                </p>

                
                <span className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium
                  ${item.status === "Studying"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}