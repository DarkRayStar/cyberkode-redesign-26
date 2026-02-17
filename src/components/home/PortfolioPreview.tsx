"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        title: "Campbelltown CCC",
        category: "Childcare & Education",
        image: "/images/campbelltown_ccc_final.png",
        link: "https://www.campbelltownccc.com.au/",
    },
    {
        title: "CyberSpectrum",
        category: "Web App / Audio Visualizer",
        image: "/images/cyberspectrum_final.png",
        link: "https://cyberspectrum.club/",
    },
    {
        title: "Bzone Automotive",
        category: "Automotive Services",
        image: "/images/bzone_automotive_final.png",
        link: "https://bzoneautomotive.com.au/",
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
                    <Link href="#" className="hidden md:block">
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
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <Card className="overflow-hidden border-white/10 shadow-lg group cursor-pointer bg-white/5 backdrop-blur-sm h-full flex flex-col">
                                    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-90"
                                        />
                                        {/* Dark overlay for blending - fades out on hover */}
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />

                                        {/* Bottom gradient to blend into card content */}
                                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-80" />

                                        {/* Hover overlay with button */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                            <Button variant="secondary" className="bg-primary text-white hover:bg-primary/90 border-none shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                Visit Site
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 bg-white/5 border-t border-white/5 flex-grow relative z-20">
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.category}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="#">
                        <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                            View All Projects <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
