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
        <section className="py-24 bg-secondary/5">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
                            Our Work
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                            Recent Projects
                        </h2>
                    </div>
                    <Link href="/portfolio" className="hidden md:block">
                        <Button variant="ghost" className="text-secondary hover:text-primary gap-2">
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
                            <Card className="overflow-hidden border-none shadow-lg group cursor-pointer">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="secondary" className="bg-white text-secondary hover:bg-primary hover:text-white">View Details</Button>
                                    </div>
                                </div>
                                <CardContent className="p-4 bg-white">
                                    <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                                    <p className="text-sm text-gray-500">{project.category}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/portfolio">
                        <Button variant="default" className="w-full">
                            View All Projects <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
