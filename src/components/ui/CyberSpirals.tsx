"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CyberSpirals() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.8, 0.8, 0.3]);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Spiral 1 - Top Right */}
            <motion.div
                style={{ rotate, scale, opacity }}
                className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full border-[1px] border-primary/20"
            >
                <div className="absolute inset-4 rounded-full border-[1px] border-primary/10 border-dashed" />
                <div className="absolute inset-12 rounded-full border-[1px] border-primary/20" />
                <div className="absolute inset-32 rounded-full border-[1px] border-primary/5" />
            </motion.div>

            {/* Spiral 2 - Bottom Left */}
            <motion.div
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]), scale, opacity }}
                className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full border-[1px] border-secondary/20"
            >
                <div className="absolute inset-8 rounded-full border-[1px] border-secondary/10 border-dashed" />
                <div className="absolute inset-24 rounded-full border-[1px] border-secondary/20" />
            </motion.div>

            {/* Spiral 3 - Center (Subtle) */}
            <motion.div
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [45, 90]), scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]), opacity: 0.05 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border-[2px] border-white/5 border-dotted"
            />
        </div>
    );
}
