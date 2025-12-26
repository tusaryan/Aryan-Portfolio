"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import educationData from "@/content/education.json";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Education() {
    const { education } = educationData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="education" className="relative py-24 px-4 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Academic background and qualifications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-8"
                >
                    {education.map((edu, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                                                {edu.logo ? (
                                                    <div className="relative h-12 w-12 overflow-hidden rounded-md">
                                                        <Image
                                                            src={edu.logo}
                                                            alt={`${edu.school} Logo`}
                                                            fill
                                                            sizes="(max-width: 768px) 48px, 48px"
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    <GraduationCap className="h-6 w-6" />
                                                )}
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                    {edu.school}
                                                </CardTitle>
                                                <p className="text-blue-600 dark:text-cyan-400 font-medium font-medium">
                                                    {edu.degree}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{edu.start} - {edu.end}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0 pl-4 md:pl-20">
                                    {edu.details && (
                                        <ul className="list-disc list-outside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                                            {edu.details.map((detail, idx) => (
                                                <li key={idx} className="pl-1">{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
