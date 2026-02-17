"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 z-0" />

            {/* Abstract Shapes Removed */}

            <div className="container px-4 md:px-6 relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-4"
                >
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
                        Innovation Meets Technology
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-7xl/none text-[#011a3e] dark:text-white font-[family-name:var(--font-heading)]">
                        Design. Build. <br />
                        <span className="text-primary">Grow.</span>
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        We are Cyberkode. A digital agency focused on crafting beautiful web experiences and software solutions that drive real results.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 font-bold px-8">
                                Start Your Project <ArrowRight size={18} />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto lg:mr-0 relative w-full aspect-[4/3] max-w-[600px]"
                >
                    {/* Restoring original hero illustration */}
                    <Image
                        src="/images/banner_1.png"
                        alt="Cyberkode Web Solutions Team"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
