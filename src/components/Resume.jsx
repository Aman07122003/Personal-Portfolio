import { motion } from "framer-motion";
import React from "react";
import { IoSchoolOutline, IoBriefcaseOutline, IoDownloadOutline } from "react-icons/io5";
import { FiAward } from "react-icons/fi";

export default function Resume() {
  const education = [
    {
      title: "Master of Fine Arts",
      institution: "University School of the Arts",
      year: "2007 — 2008",
      description: "Specialized in digital media and interactive design. Graduated with honors.",
      skills: ["UI/UX Design", "3D Modeling", "Digital Illustration"]
    },
    {
      title: "Professional Certificate",
      institution: "New York Academy of Art",
      year: "2006 — 2007",
      description: "Advanced studies in traditional painting techniques and art history.",
      skills: ["Oil Painting", "Art History", "Figure Drawing"]
    },
    {
      title: "High School Diploma",
      institution: "High School of Art and Design",
      year: "2002 — 2004",
      description: "Focus on foundational art principles and portfolio development.",
      skills: ["Drawing", "Color Theory", "Typography"]
    }
  ];

  const experience = [
    {
      title: "Creative Director",
      company: "Design Studio Inc.",
      year: "2015 — Present",
      description: "Lead a team of 12 designers and developers to create award-winning digital experiences for Fortune 500 clients.",
      achievements: [
        "Increased client satisfaction by 40%",
        "Won 3 Webby Awards",
        "Developed company design system"
      ]
    },
    {
      title: "Senior Designer",
      company: "Digital Creative Agency",
      year: "2010 — 2015",
      description: "Created visual identities and marketing materials for tech startups.",
      achievements: [
        "Designed 50+ brand identities",
        "Mentored junior designers",
        "Developed motion graphics pipeline"
      ]
    }
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Motion Graphics", level: 85 },
    { name: "Brand Identity", level: 95 },
    { name: "Frontend Development", level: 75 }
  ];

  return (
    <motion.article 
      className="resume mx-auto p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-12 flex flex-col">
        <div className="flex justify-between">
          <motion.h2 
            className="text-2xl font-bold text-white"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
           Resume
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 p-2 text-sm rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium shadow-lg"
          >
            <IoDownloadOutline />
            Resume
          </motion.button>
        </div>
        <p className="text-gray-400 mt-2 text-sm">Professional journey and qualifications</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/30">
              <IoSchoolOutline className="text-2xl text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <ol className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-[18px] before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-500/50 before:to-transparent">
            {education.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                <div className="absolute left-3 top-17 w-4 h-4 rounded-full bg-amber-500 border-4 border-gray-800 z-10"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-500/30 transition-all duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-amber-400 font-medium mb-3">{item.institution}</p>
                  <p className="text-gray-300 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-gray-700/50 text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Experience Column */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/30">
              <IoBriefcaseOutline className="text-2xl text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <ol className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-[18px] before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-500/50 before:to-transparent">
            {experience.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                <div className="absolute left-3 top-17 w-4 h-4 rounded-full bg-amber-500 border-4 border-gray-800 z-10"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-500/30 transition-all duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-amber-400 font-medium mb-3">{item.company}</p>
                  <p className="text-gray-300 mb-3">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <FiAward className="flex-shrink-0 text-amber-400 mt-0.5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>
      </div>

      {/* Skills Section */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/30">
            <FiAward className="text-2xl text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-amber-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.article>
  );
}