import { motion } from "framer-motion";
import library from "../assets/images/library.png";
import motimate from "../assets/images/motimate.png";
import menu from "../assets/images/webpage.png";
import portfolio from "../assets/images/portfolio.png"

export default function Projects(){

  const projects = [
    {
      title:"Library Management System",
      tech:"React • Spring Boot • PostgreSQL",
      description:"Full-stack library system for managing books, users, and borrowing operations with dashboard statistics and REST APIs.",
      image:library,
      live:"https://librarymanagement-navy.vercel.app",
      github:"https://github.com/assa75/Library.git"
    },
    {
      title:"Portfolio Website",
      tech:"React • Tailwind CSS • Framer Motion",
      description:"Built a modern, responsive portfolio with smooth animations support to showcase projects, technical skills, and certifications with an engaging user experience.",
      image:portfolio,
      live:"https://portfolio-assa75s-projects.vercel.app/",
      github:"https://github.com/assa75/Portfolio.git"
    },
    {
      title:"MotiMate – Daily Motivation App",
      tech:"React Native",
      description:"Mobile app providing daily motivational quotes and journaling features with a clean and user-friendly interface.",
      image:motimate,
      live:"https://motimate-app.netlify.app/",
      github:"https://github.com/assa75/MotiMate_App.git"
    },
    {
      title:"Restaurant Website",
      tech:"HTML • CSS • JavaScript",
      description:"Responsive restaurant menu webpage with categories, theme toggle, and modern UI.",
      image:menu,
      live:"https://foodzone-restaurent-app.netlify.app/",
      github:"https://github.com/assa75/FoodZone.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-20">
          Projects <span className="text-purple-700">Made</span>
        </h2>

        <div className="space-y-20">

          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >

                {/* IMAGE */}
                <div className="w-full md:w-1/2 group">
                  <img
                    src={project.image}
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-purple-600 mt-2 text-sm">
                    {project.tech}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {project.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-4 mt-6">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}