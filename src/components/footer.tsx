"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/tusaryan",
            label: "GitHub",
            color: "hover:text-gray-800 dark:hover:text-gray-300",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/tusaryan/",
            label: "LinkedIn",
            color: "hover:text-blue-600 dark:hover:text-cyan-400",
        },
        {
            icon: Mail,
            href: "mailto:aryankumartus@gmail.com",
            label: "Email",
            color: "hover:text-red-600 dark:hover:text-orange-400",
        },
    ];

    const linkVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
            },
        }),
    };

    return (
        <footer className="relative border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
                {/* Scroll to Top Section */}
                {showScroll && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 0.2 }
                        }}
                        className="flex justify-center mb-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="p-3 rounded-full bg-gray-200 dark:bg-yellow-900/40 text-black dark:text-yellow-400 border border-gray-300 dark:border-yellow-700/30 hover:shadow-lg transition-all duration-300"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="h-6 w-6" />
                        </motion.button>
                    </motion.div>
                )}

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Aryan Kumar
                            </span>
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Full-stack developer passionate about building scalable applications and solving complex problems through code.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {["About", "Projects", "Skills", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Connect
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <motion.div
                                        key={social.label}
                                        variants={linkVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={i}
                                    >
                                        <motion.a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`inline-flex p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </motion.a>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8 origin-left"
                />

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        © {currentYear} Aryan Kumar. All rights reserved. | Built with{" "}
                        <span className="text-blue-600 dark:text-cyan-400">Next.js</span> +{" "}
                        <span className="text-blue-600 dark:text-cyan-400">Tailwind CSS</span> +{" "}
                        <span className="text-blue-600 dark:text-cyan-400">Framer Motion</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
