"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Zap, Trophy } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const stats = [
    { label: "Completed Projects", value: "300+", icon: Briefcase },
    { label: "Happy Clients", value: "100+", icon: Users },
    { label: "Active Projects", value: "10+", icon: Zap },
    { label: "Years Experience", value: "5+", icon: Trophy },
];

export function StatsSection() {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                        Over 300 Completed Work & Still Counting
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        We take pride in our track record of delivering exceptional digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full aspect-square md:aspect-auto md:h-48"
                        >
                            <SpotlightCard className="h-full flex flex-col items-center justify-center p-4 md:p-6 group backdrop-blur-sm hover:border-primary/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="text-gray-400 group-hover:text-primary transition-colors mb-3 duration-300 transform group-hover:scale-110">
                                        <stat.icon size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter group-hover:text-primary transition-colors">{stat.value}</h3>
                                    <p className="text-xs md:text-sm text-gray-500 text-center font-medium group-hover:text-gray-300 uppercase tracking-wide">{stat.label}</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
