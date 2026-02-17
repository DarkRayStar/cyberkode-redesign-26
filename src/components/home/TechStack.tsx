"use client";

import { cn } from "@/lib/utils";
import { Database, Server, Smartphone, Globe, Cloud, Code2, Cpu, Lock } from "lucide-react";

const technologies = [
    { name: "Next.js", icon: Globe },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Code2 },
    { name: "React Native", icon: Smartphone },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "GraphQL", icon: Globe },
    { name: "AI/ML", icon: Cpu },
    { name: "Cybersecurity", icon: Lock },
];

export function TechStack() {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-4 mb-6">
                <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest">Powered by Modern Tech</p>
            </div>
            <div
                className="relative flex overflow-x-hidden group"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <div className="animate-marquee whitespace-nowrap flex gap-8 md:gap-16">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors">
                            <tech.icon size={24} className="text-primary/70" />
                            <span className="text-lg font-semibold">{tech.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {technologies.map((tech, index) => (
                        <div key={`dup-${index}`} className="flex items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors">
                            <tech.icon size={24} className="text-primary/70" />
                            <span className="text-lg font-semibold">{tech.name}</span>
                        </div>
                    ))}
                    {/* Triplicate for large screens */}
                    {technologies.map((tech, index) => (
                        <div key={`trip-${index}`} className="flex items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors">
                            <tech.icon size={24} className="text-primary/70" />
                            <span className="text-lg font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
