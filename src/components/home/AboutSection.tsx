"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Use about.png from migrated assets */}
                        <div className="relative aspect-video overflow-hidden rounded-xl shadow-[0_0_40px_-10px_rgba(237,86,28,0.2)] border border-white/10">
                            <Image
                                src="/images/about.png"
                                alt="About Cyberkode"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-secondary/5 rounded-xl border border-white/5" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center lg:text-left order-1 lg:order-2"
                    >
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
                            Who We Are
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                            Building Digital Experiences That <span className="text-gradient">Matter</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            At Cyberkode, we believe in the power of technology to transform businesses. Our team of passionate developers and designers work tirelessly to create solutions that are not just functional, but exceptional.
                        </p>
                        <ul className="space-y-4 inline-block text-left">
                            {['Innovative Solutions', 'Client-Centric Approach', 'Expert Team'].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Link href="#">
                                <Button variant="outline" className="border-primary/50 text-white hover:bg-primary hover:text-white gap-2 transition-all duration-300 rounded-full px-6">
                                    Learn More About Us <ArrowRight size={16} />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
