"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Zap, Trophy } from "lucide-react";

const stats = [
    { label: "Completed Projects", value: "300+", icon: Briefcase },
    { label: "Happy Clients", value: "100+", icon: Users },
    { label: "Active Projects", value: "10+", icon: Zap },
    { label: "Years Experience", value: "5+", icon: Trophy },
];

export function StatsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
                        Over 300 Completed Work & Still Counting
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        We take pride in our track record of delivering exceptional digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 bg-white rounded-full shadow-lg aspect-square max-w-[200px] mx-auto border border-gray-100 hover:border-primary/50 transition-colors"
                        >
                            <div className="text-primary mb-2">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-secondary mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-500 text-center font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
