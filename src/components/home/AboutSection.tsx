"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Use about.png from migrated assets */}
                        <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                            <Image
                                src="/images/about.png"
                                alt="About Cyberkode"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-secondary/5 rounded-xl border border-secondary/10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                            Who We Are
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
                            Building Digital Experiences That Matter
                        </h2>
                        <p className="text-gray-500 text-lg">
                            At Cyberkode, we believe in the power of technology to transform businesses. Our team of passionate developers and designers work tirelessly to create solutions that are not just functional, but exceptional.
                        </p>
                        <ul className="space-y-4">
                            {['Innovative Solutions', 'Client-Centric Approach', 'Expert Team'].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Link href="/about">
                                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white gap-2">
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
