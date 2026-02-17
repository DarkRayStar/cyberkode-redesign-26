"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        title: "Project Alpha",
        category: "Web Development",
        image: "/images/portfolio_1.jpg",
    },
    {
        title: "Beta App",
        category: "Mobile Application",
        image: "/images/portfolio_2.jpg",
    },
    {
        title: "Gamma Design",
        category: "UI/UX Design",
        image: "/images/portfolio_3.jpg",
    },
];

export function PortfolioPreview() {
    return (
        <section className="py-16 md:py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 md:gap-0">
                    <div className="space-y-4 text-center md:text-left w-full md:w-auto">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit border border-primary/20 mx-auto md:mx-0">
                            Our Work
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                            Recent <span className="text-gradient">Projects</span>
                        </h2>
                    </div>
                    <Link href="/portfolio" className="hidden md:block">
                        <Button variant="ghost" className="text-gray-400 hover:text-primary gap-2 hover:bg-white/5 rounded-full px-6">
                            View All Projects <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden border-white/10 shadow-lg group cursor-pointer bg-white/5 backdrop-blur-sm">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="secondary" className="bg-primary text-white hover:bg-primary/90 border-none shadow-lg">View Details</Button>
                                    </div>
                                </div>
                                <CardContent className="p-4 bg-white/5 border-t border-white/5">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.category}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/portfolio">
                        <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                            View All Projects <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
