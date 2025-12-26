"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { professionalData } from "@/data/professional";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="certifications" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-green-500/5 dark:from-purple-500/10 dark:to-green-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 gradient-green-blue">
            Certifications
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Professional certifications and credentials
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {professionalData.certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover" initial="initial">
              <motion.div variants={hoverVariants}>
              <Card className="p-6 md:p-8 h-full flex flex-col justify-between hover:shadow-2xl dark:hover:shadow-green-500/20 transition-all duration-400 card-spotlight bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    {cert.logo ? (
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-2 flex items-center justify-center border border-green-200/50 dark:border-green-700/30 shadow-md"
                      >
                        <Image
                          src={cert.logo}
                          alt={cert.issuer}
                          width={44}
                          height={44}
                          className="object-contain"
                        />
                      </motion.div>
                    ) : (
                      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2 font-semibold">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  {cert.status && (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full"
                    >
                      {cert.status}
                    </motion.span>
                  )}
                  {cert.url && (
                    <motion.a
                      whileHover={{ scale: 1.05, x: 2 }}
                      transition={{ duration: 0.3 }}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-2 transition-colors duration-300"
                    >
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  )}
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
