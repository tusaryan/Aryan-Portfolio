"use client";

import { resumeData } from "@/data/resume";
import contactData from "@/content/contact.json";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Loader2, Check, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
    const contact = contactData && contactData.email ? contactData : {
        email: resumeData.contact.email,
        github: resumeData.contact.social?.find((s: any) => s.name === "GitHub")?.url || "",
        linkedin: resumeData.contact.social?.find((s: any) => s.name === "LinkedIn")?.url || ""
    };
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Send email using mailto with pre-filled subject
            const emailBody = `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`;
            const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(`${formState.subject} - From ${formState.name}`)}&body=${encodeURIComponent(emailBody)}`;

            // Open mailto
            window.location.href = mailtoLink;

            setSubmitStatus("success");
            setFormState({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } catch (error) {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = formState.name && formState.email && formState.subject && formState.message;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="contact" className="relative py-24 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-600/15 to-red-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-red-600/10 to-purple-600/15 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/8 to-purple-500/8 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-red-600 to-blue-900 dark:from-red-500 dark:to-blue-600 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Have a project idea or just want to say hello? Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    {/* Email Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="group h-full"
                    >
                        <div className="relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex-shrink-0">
                                    <Mail className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Preferred way to reach me
                            </p>
                            <div className="w-full mt-auto min-w-0">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 transition-transform hover:gap-3 text-sm group-hover:underline"
                                >
                                    <span className="block break-all">{contact.email}</span>
                                    <span className="flex-shrink-0">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="group h-full"
                    >
                        <div className="relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex-shrink-0">
                                    <Github className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Check out my code
                            </p>
                            <div className="w-full mt-auto min-w-0">
                                <a
                                    href={contact.github || "https://github.com/tusaryan"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all text-sm group-hover:underline"
                                >
                                    <span className="block truncate">{contact.github ? contact.github.replace('https://', '') : '@tusaryan'}</span>
                                    <span className="flex-shrink-0">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="group h-full"
                    >
                        <div className="relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex-shrink-0">
                                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Connect with me
                            </p>
                            <div className="w-full mt-auto min-w-0">
                                <a
                                    href={contact.linkedin || "https://www.linkedin.com/in/tusaryan/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all text-sm group-hover:underline"
                                >
                                    <span className="block break-all">{contact.linkedin ? contact.linkedin.replace('https://www.linkedin.com/in/', '') : 'LinkedIn'}</span>
                                    <span className="flex-shrink-0">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Send me a message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <motion.div
                                whileFocus={{ scale: 1.02 }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                whileFocus={{ scale: 1.02 }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </motion.div>
                        </div>

                        {/* Subject Field */}
                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-all duration-300"
                                placeholder="What's this about?"
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-all duration-300 resize-none"
                                placeholder="Tell me more about your project or inquiry..."
                            />
                        </motion.div>

                        {/* Submit Status */}
                        {submitStatus === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 text-green-700 dark:text-green-300 flex items-center gap-2"
                            >
                                <Check className="h-5 w-5" />
                                Opening your email client. Please send the email to complete the message.
                            </motion.div>
                        )}

                        {submitStatus === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 flex items-center gap-2"
                            >
                                <AlertCircle className="h-5 w-5" />
                                Something went wrong. Please try again or email me directly.
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading || !isFormValid}
                            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail className="h-5 w-5" />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
