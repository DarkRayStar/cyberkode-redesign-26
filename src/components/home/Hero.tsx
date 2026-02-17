"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            {/* Background Gradient Removed to reveal global background */}

            {/* Abstract Shapes Removed */}

            <div className="container px-4 md:px-6 relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-7xl mx-auto pt-10 pb-20 lg:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1"
                >
                    <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit mx-auto lg:mx-0 border border-primary/20 backdrop-blur-sm">
                        Innovation Meets Technology
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="block text-white">Design. Build.</span>
                            <span className="block text-gradient">Grow.</span>
                        </h1>
                        <p className="mx-auto lg:mx-0 text-xl text-gray-400 max-w-[600px] leading-relaxed">
                            We are Cyberkode. A digital agency focused on creating brand-focused experiences and software solutions that drive real results.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="#" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto animate-shimmer text-white font-bold rounded-full px-8 h-12 shadow-[0_0_20px_-5px_rgba(237,86,28,0.5)] hover:shadow-[0_0_30px_-5px_rgba(237,86,28,0.7)] transition-all duration-300 border-none">
                                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="#" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8 h-12 rounded-full backdrop-blur-sm">
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.2 },
                        scale: { duration: 0.5, delay: 0.2 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Floating effect
                    }}
                    className="mx-auto lg:mr-0 relative w-full aspect-[4/3] max-w-[500px] lg:max-w-[650px] order-1 lg:order-2"
                >
                    {/* Restoring original hero illustration */}
                    <Image
                        src="/images/banner_1.png"
                        alt="Cyberkode Innovation"
                        fill
                        className="object-contain drop-shadow-[0_0_40px_rgba(237,86,28,0.2)]"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
