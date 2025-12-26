"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import opensourceData from "@/content/opensource.json";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export function OpenSourceContributions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="opensource" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-green-600/15 to-cyan-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-cyan-600/10 to-green-600/8 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-bl from-teal-500/8 to-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent">
              Open Source Contributions
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Contributing to major open-source projects
          </motion.p>
        </motion.div>

        {/* Contributions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {opensourceData.openSourceContributions.map((contrib, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow card-spotlight">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-1 flex-shrink-0" />
                        {contrib.company && contrib.company.logo && (
                          <div className="w-6 h-6 relative">
                            <Image
                              src={contrib.company.logo}
                              alt={contrib.company.name}
                              fill
                              sizes="(max-width: 768px) 24px, 24px"
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {contrib.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {contrib.repository} • PR #{contrib.prNumber} • Issue #{contrib.issueNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 md:mt-0 md:text-right flex flex-col gap-2">
                    <Badge
                      variant={contrib.status === "Merged" ? "default" : "secondary"}
                      className="w-fit md:ml-auto"
                    >
                      {contrib.status}
                    </Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{contrib.date}</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{contrib.description}</p>

                {/* Highlights (if present) */}
                {contrib.highlights && contrib.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Implementations:
                    </p>
                    <ul className="space-y-1">
                      {contrib.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                          <span className="text-blue-600 dark:text-blue-400">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies & Link */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {contrib.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={contrib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
                  >
                    View PR <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
