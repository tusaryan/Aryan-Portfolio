"use client";

import { resumeData } from "@/data/resume";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Zap } from "lucide-react";
import { useState } from "react";

export function About() {
    const { name, about, avatarUrl, contact } = resumeData;
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        },
    };

    const highlights = [
        {
            icon: Code2,
            title: "Full-Stack Development",
            desc: "From React, Spring Boot to Node.js, building end-to-end production-grade solutions",
        },
        {
            icon: Lightbulb,
            title: "Problem Solving Mindset",
            desc: "Creative solutions to complex engineering challenges",
        },
        {
            icon: Zap,
            title: "Performance",
            desc: "Optimized code and scalable architectures",
        },
    ];

    return (
        <section id="about" className="relative py-24 px-4 overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/5 to-purple-500/5 dark:from-red-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto max-w-6xl">
                {/* Main About Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-16 items-center mb-20"
                >
                    {/* Text Content */}
                    <motion.div variants={textVariants} className="flex flex-col space-y-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl font-bold mb-6"
                            >
                                <span className="bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </motion.h2>
                            <motion.p
                                variants={textVariants}
                                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium"
                            >
                                {about}
                            </motion.p>
                        </div>

                        {/* Social Links */}
                        <motion.ul
                            variants={textVariants}
                            className="flex gap-4 pt-6 flex-wrap"
                        >
                            {contact.social.map((s) => (
                                <motion.li
                                    key={s.name}
                                    className="relative flex items-center"
                                >
                                    <motion.a
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ width: "3.5rem" }}
                                        whileHover={{ width: "auto" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="flex items-center overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400 hover:shadow-lg h-14 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                                        aria-label={s.name}
                                    >
                                        <div className="flex items-center justify-center w-[3.5rem] h-full flex-shrink-0">
                                            <s.icon className="h-6 w-6" />
                                        </div>
                                        <div className="overflow-hidden flex items-center h-full">
                                            <motion.span
                                                className="whitespace-nowrap pr-6 font-medium text-sm"
                                            >
                                                {s.name}
                                            </motion.span>
                                        </div>
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Avatar */}
                    {avatarUrl && (
                        <motion.div
                            variants={imageVariants}
                            whileHover="hover"
                            className="flex justify-center md:justify-end"
                        >
                            <div
                                className="relative cursor-zoom-in"
                                onClick={() => setIsLightboxOpen(true)}
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 blur-2xl opacity-40 -z-10" />

                                {/* Avatar Image */}
                                <div className="relative w-64 h-64 rounded-full border-4 border-blue-300 dark:border-cyan-400 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                                    <Image
                                        src={avatarUrl}
                                        alt={name}
                                        fill
                                        sizes="(max-width: 768px) 256px, 256px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Highlights Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <motion.div
                                key={highlight.title}
                                variants={textVariants}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {highlight.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            {/* Lightbox / Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-white/20 transition-colors z-50"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <div className="relative w-auto h-auto max-w-full max-h-full aspect-square md:aspect-auto">
                            <Image
                                src={avatarUrl}
                                alt={name}
                                width={800}
                                height={800}
                                className="object-contain max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
