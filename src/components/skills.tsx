"use client";

import { resumeData } from "@/data/resume";
import techData from "@/content/skills.json";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function Skills() {
    const { skills } = resumeData;
    const techStack = techData;
    const marqueeRef = useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
        hover: {
            scale: 1.15,
            y: -8,
            transition: { duration: 0.3 },
        },
    };

    const badgeVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
        hover: {
            scale: 1.08,
            transition: { duration: 0.3 },
        },
    };

    const [duplicateTech, setDuplicateTech] = useState(techStack);
    const [isPaused, setIsPaused] = useState(false);

    // Quadruple the data to ensure smooth infinite wrap-around
    useEffect(() => {
        setDuplicateTech([...techStack, ...techStack, ...techStack, ...techStack]);
    }, [techStack]);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        let animationId: number;

        const animate = () => {
            if (!isPaused) {
                // Slower scroll speed: 0.5px per frame approx
                marquee.scrollLeft += 0.5;
            }

            // Infinite scroll logic: check bounds efficiently
            // We have 4 sets. effectively we scroll through set 1 and 2, then reset to set 0.
            // This prevents seeing the "edge"
            const singleSetWidth = marquee.scrollWidth / 4;

            if (marquee.scrollLeft >= singleSetWidth * 2) {
                // Reset back to start of set 1 (offset by one set width) to allow continuous scroll
                marquee.scrollLeft = marquee.scrollLeft - singleSetWidth;
            } else if (marquee.scrollLeft <= 0) {
                // Handle manual backward scroll edge case
                marquee.scrollLeft = singleSetWidth;
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused, duplicateTech]);

    const scroll = (direction: 'left' | 'right') => {
        if (marqueeRef.current) {
            const scrollAmount = 300;
            marqueeRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/5 to-purple-500/5 dark:from-red-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-blue-purple">
                        Skills &amp; Tech Stack
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Tech Stack Icons - Horizontal Marquee */}
                <div
                    className="relative mb-16 group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="marquee-mask absolute left-0 top-0 h-full w-8 sm:w-20 md:w-32 z-20" />
                    <div className="marquee-mask absolute right-0 top-0 h-full w-8 sm:w-20 md:w-32 z-20" />

                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-slate-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 sm:p-3 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    {/* Marquee Container */}
                    <div className="overflow-hidden">
                        <div ref={marqueeRef} className="flex gap-12 items-center py-8 overflow-x-auto scrollbar-hide">
                            {duplicateTech.map((tech, idx) => (
                                <motion.div
                                    key={`${tech.name}-${idx}`}
                                    className="flex flex-col items-center gap-2 flex-shrink-0 group"
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`relative w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br ${tech.color} p-0.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-lg flex items-center justify-center backdrop-blur-sm">
                                            <Image
                                                src={tech.logoUrl || tech.logo}
                                                alt={tech.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-slate-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 sm:p-3 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
