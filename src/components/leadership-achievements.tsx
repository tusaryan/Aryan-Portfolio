"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import leadershipData from "@/content/leadership.json";
import { Star, Users } from "lucide-react";
import Image from "next/image";

export function LeadershipAchievements() {
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
      transition: { duration: 0.8 },
    },
  };

  const achievements = leadershipData.achievements || [];
  const leadershipRoles = leadershipData.leadershipRoles || [];

  return (
    <section id="leadership-achievements" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/15 to-red-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tl from-yellow-600/10 to-orange-600/8 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-red-500/8 to-orange-500/5 rounded-full blur-3xl -z-10" />
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
              Leadership & Achievements
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
            >
              <Star className="w-6 h-6 text-yellow-500" />
              Achievements
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-shadow card-spotlight">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-2">
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
            >
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Leadership Roles
            </motion.h3>

            <div className="space-y-4">
              {leadershipRoles.map((role, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-shadow card-spotlight">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          {role.logo && (
                            <div className="relative w-8 h-8 flex-shrink-0 bg-white dark:bg-gray-800 rounded p-0.5 flex items-center justify-center">
                              <Image
                                src={role.logo}
                                alt={role.organization}
                                fill
                                sizes="32px"
                                className="object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                              {role.position}
                            </h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                              {role.organization}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {role.duration}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
