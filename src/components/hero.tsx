"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
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
        <section
            id="hero"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background gradient blobs - IntelliJ style */}
            <div className="absolute inset-0 -z-10">
                {/* Top left blue blob */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/10 dark:from-blue-600/15 dark:to-purple-600/8 rounded-full blur-3xl opacity-60 dark:opacity-40" />
                {/* Top right red blob */}
                <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-red-600/20 to-orange-600/10 dark:from-red-600/15 dark:to-orange-600/8 rounded-full blur-3xl opacity-50 dark:opacity-35" />
                {/* Center purple blob */}
                <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-pink-600/10 dark:from-purple-600/10 dark:to-pink-600/8 rounded-full blur-3xl opacity-40 dark:opacity-30 transform -translate-y-1/2" />
                {/* Bottom right blue blob */}
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-600/15 to-blue-600/10 dark:from-cyan-600/10 dark:to-blue-600/8 rounded-full blur-3xl opacity-50 dark:opacity-35" />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center py-20 px-4 max-w-5xl mx-auto"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200/50 dark:border-blue-700/50">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-black mb-8 tracking-tight"
                >
                    <span className="bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent">
                        Aryan Kumar
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p variants={itemVariants} className="text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    Software Engineer | Open Source Contributor | AI & Data Science
                </motion.p>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Building scalable systems, crafting intelligent solutions, and contributing to open source. Passionate about distributed systems, microservices, and agentic AI.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white border-0 rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-400"
                        >
                            <a href="#projects">View My Work</a>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white dark:bg-gray-800/80 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-700/50 rounded-full px-10 py-6 text-lg font-bold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-400"
                        >
                            <a href="#contact">Get In Touch</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 1 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 w-full flex justify-center z-10"
            >
                <a
                    href="#about"
                    className="p-2 cursor-pointer rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Scroll to about section"
                >
                    <ArrowDown className="h-8 w-8 text-black dark:text-yellow-400 drop-shadow-lg" />
                </a>
            </motion.div>
        </section>
    );
}
