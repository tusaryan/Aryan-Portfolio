"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-sm"
        >
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="#hero" className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition">
                        Aryan Kumar
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    {[
                        { name: "About", href: "#about" },
                        { name: "Projects", href: "#projects" },
                        { name: "Experience", href: "#experience" },
                        { name: "Certifications", href: "#certifications" },
                        { name: "Open Source", href: "#opensource" },
                        { name: "Skills", href: "#skills" },
                        { name: "Articles", href: "#articles" },
                        { name: "Contact", href: "#contact" },
                    ].map((item) => (
                        <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
                            <Link
                                href={item.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-900 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
            >
                <ul className="flex flex-col space-y-3 p-4">
                    {[
                        { name: "About", href: "#about" },
                        { name: "Projects", href: "#projects" },
                        { name: "Experience", href: "#experience" },
                        { name: "Certifications", href: "#certifications" },
                        { name: "Open Source", href: "#opensource" },
                        { name: "Skills", href: "#skills" },
                        { name: "Articles", href: "#articles" },
                        { name: "Contact", href: "#contact" },
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.header>
    );
}
