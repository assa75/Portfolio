import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiReact, SiFigma } from "react-icons/si";

export default function Skills() {

  const skillData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl" />, level: 80 },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl" />, level: 80 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" />, level: 70 },
        { name: "React", icon: <FaReact className="text-cyan-500 text-3xl" />, level: 70 },
        { name: "React Native", icon: <SiReact className="text-cyan-500 text-3xl" />, level: 60 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-600 text-3xl" />, level: 85 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 text-3xl" />, level: 70 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" />, level: 60 },
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" />, level: 70 },
        { name: "GitHub", icon: <FaGithub className="text-black text-3xl" />, level: 80 },
        { name: "Figma", icon: <SiFigma className="text-pink-500 text-3xl" />, level: 60 },
        {
        name: "VS Code",
        icon: (
            <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            className="w-10 h-10"
            />
        ),
        level: 90
        },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Technical <span className="text-purple-700">Skills</span>
        </motion.h2>

        {/* CATEGORY SECTIONS */}
        <div className="space-y-12">

          {skillData.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {section.category}
              </h3>

              {/* Skills */}
              <div className="grid md:grid-cols-2 gap-6">

                {section.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-200 
transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}