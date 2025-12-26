"use client";

import articlesData from "@/content/articles.json";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Clock, Tag, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Articles() {
    const articles = articlesData;
    const featuredArticles = articles.filter((article) => article.featured);
    const otherArticles = articles.filter((article) => !article.featured);
    const [showMore, setShowMore] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const articleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const cardHoverVariants = {
        initial: { y: 0 },
        hover: {
            y: -12,
            transition: { duration: 0.4 },
        },
    };

    // Placeholder generation logic
    const getPlaceholderGradient = (category: string) => {
        const hash = category.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const gradients = [
            "from-blue-500 to-cyan-500",
            "from-purple-500 to-pink-500",
            "from-orange-500 to-red-500",
            "from-green-500 to-teal-500",
            "from-indigo-500 to-purple-500"
        ];
        return gradients[hash % gradients.length];
    };

    const ArticleCard = ({ article, featured = false }: { article: any; featured?: boolean }) => {
        const [imgError, setImgError] = useState(false);

        return (
            <motion.div
                variants={articleVariants}
                whileHover="hover"
                initial="initial"
                className="card-slow-hover h-full"
            >
                <motion.div variants={cardHoverVariants} className="h-full">
                    <div className={`group relative overflow-hidden rounded-xl border transition-all duration-400 card-spotlight ${featured
                        ? "border-indigo-300/50 dark:border-indigo-700/50 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
                        : "border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/50"
                        } hover:shadow-xl dark:hover:shadow-indigo-500/20 h-full flex flex-col`}>
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-400/5 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                        <div className={`relative p-6 flex flex-col h-full ${featured ? "md:p-8" : ""}`}>
                            {/* Article preview image or placeholder */}
                            <div className={`mb-4 overflow-hidden rounded-md flex-shrink-0 ${featured ? 'h-56 md:h-72' : 'h-48'}`}>
                                {article.image && !imgError ? (
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={1200}
                                        height={600}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(article.category)} flex items-center justify-center p-6 text-center`}>
                                        <span className="text-white font-bold text-lg md:text-xl drop-shadow-md opacity-90">
                                            {article.title}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Featured badge */}
                            {featured && (
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-300/30 dark:border-indigo-700/30 w-fit">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                    Featured
                                </div>
                            )}

                            {/* Category */}
                            <div className="mb-3 inline-flex items-center gap-2 w-fit">
                                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                                    {article.category}
                                </span>
                            </div>

                            {/* Title (clickable) */}
                            <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-bold mb-3 transition-all duration-400 text-gray-900 dark:text-white line-clamp-2`}>
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text">
                                    {article.title}
                                </a>
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                                {article.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {article.tags.map((tag: string) => (
                                    <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Meta information */}
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-slate-200 dark:border-slate-700/50 pt-4 mt-auto">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>

                                {/* Read more link */}
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold group/link transition-all duration-300"
                                >
                                    <span>Read</span>
                                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <section id="articles" className="relative py-24 px-4 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/5 to-purple-500/5 dark:from-red-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-10" />

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
                            Articles &amp; Insights
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Technical articles, insights, and contributions about my work in software development
                    </p>
                </motion.div>

                {/* Featured Articles - Always show all featured to highlight quality work */}
                {featuredArticles.length > 0 && (
                    <div className="mb-12">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {featuredArticles.map((article, idx) => (
                                <ArticleCard key={`featured-${idx}`} article={article} featured={true} />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* More Articles Section */}
                {otherArticles.length > 0 && (
                    <div className="mt-16">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                More Articles
                            </h3>
                            <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-6"></div>
                        </div>

                        {/* Conditionally rendered articles */}
                        <AnimatePresence>
                            {showMore && (
                                <motion.div
                                    variants={containerVariants}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 overflow-hidden"
                                >
                                    {otherArticles.map((article, idx) => (
                                        <ArticleCard key={`other-${idx}`} article={article} featured={false} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Unified Toggle Button at the bottom */}
                        <div className="text-center">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 rounded-full font-semibold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
                            >
                                {showMore ? (
                                    <>
                                        Show Less
                                        <ChevronUp className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        See All Articles ({otherArticles.length + featuredArticles.length})
                                        <ChevronDown className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
