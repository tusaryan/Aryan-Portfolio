"use client";

import { resumeData } from "@/data/resume";
import projectsData from "@/content/projects.json";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Projects() {
    const { projects } = projectsData || resumeData;
    const [showAll, setShowAll] = useState(false);

    // Featured projects (first 6)
    const featuredProjects = projects.slice(0, 6);
    const allProjects = projects;
    const displayProjects = showAll ? allProjects : featuredProjects;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
        hover: {
            y: -8,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section id="projects" className="relative py-24 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/15 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-600/15 to-blue-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore my recent work spanning microservices, AI, and full-stack development
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12"
                >
                    <AnimatePresence mode="popLayout">
                        {displayProjects.map((proj, index) => (
                            <motion.div
                                layout
                                key={proj.title}
                                variants={projectVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                whileHover="hover"
                                className="group"
                            >
                                <Card className="card-spotlight flex flex-col justify-between h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-400 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-blue-500/20">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {proj.title}
                                        </CardTitle>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                            {proj.dates}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="flex-1 pb-4">
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                            {proj.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.technologies.map((tech) => (
                                                <motion.div
                                                    key={tech}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Badge variant="secondary" className="text-xs bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 border-blue-200/50 dark:border-blue-800/50">
                                                        {tech}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="border-t border-gray-200/30 dark:border-gray-700/30 pt-4">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button
                                                asChild
                                                size="sm"
                                                className="bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-700 hover:to-blue-950 text-white border-0 font-semibold transition-all duration-400"
                                            >
                                                <a
                                                    href={proj.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    View Source
                                                </a>
                                            </Button>
                                        </motion.div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More Button */}
                {projects.length > 6 && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-700 hover:to-blue-950 text-white font-semibold rounded-full transition-all duration-400 shadow-lg hover:shadow-xl dark:shadow-blue-500/30"
                        >
                            {showAll ? "Show Less" : `Show More (${projects.length - 6} more projects)`}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
