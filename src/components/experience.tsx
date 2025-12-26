"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { professionalData } from "@/data/professional";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 gradient-blue-purple">
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Featured roles and contributions
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {professionalData.experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover" initial="initial">
              <motion.div variants={hoverVariants}>
                <Card className="p-6 md:p-8 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-400 card-spotlight bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-6">
                  {exp.logo && (
                    (() => {
                      const isGsoc = (exp.logo || "").includes("gsoc") || (exp.title || "").toLowerCase().includes("google");
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className={
                            isGsoc
                              ? "w-32 md:w-44 h-20 md:h-28 flex-shrink-0 bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-800 rounded-lg p-3 flex items-center justify-center border border-yellow-200/50 dark:border-yellow-700/30 shadow-lg"
                              : "w-20 h-20 flex-shrink-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-lg p-3 flex items-center justify-center border border-blue-200/50 dark:border-blue-700/30 shadow-md"
                          }
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.organization}
                            width={isGsoc ? 160 : 70}
                            height={isGsoc ? 70 : 70}
                            className="object-contain"
                          />
                        </motion.div>
                      );
                    })()
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {exp.organization}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 md:text-right whitespace-nowrap">
                    {exp.duration}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                    Key Contributions:
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-sm md:text-base text-gray-700 dark:text-gray-300 flex gap-3"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">→</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  {exp.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 font-semibold">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
