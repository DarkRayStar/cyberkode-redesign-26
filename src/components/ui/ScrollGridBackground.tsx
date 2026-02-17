"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollGridBackground() {
    const { scrollYProgress } = useScroll();

    // Parallax effects for the orbs
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-[#0a0a0a]">
            {/* Gradient Orbs */}
            {/* Primary Orange Orb - Top Left */}
            <motion.div
                style={{ y: y1, opacity: 0.8 }}
                className="absolute top-[-10%] left-[-5%] w-[900px] h-[900px] bg-primary/40 rounded-full blur-[100px]"
            />

            {/* Secondary Blue/Purple Orb - Bottom Right */}
            <motion.div
                style={{ y: y2, opacity: 0.5 }}
                className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[100px]"
            />

            {/* Tertiary Accent Orb - Middle Left (appears on scroll) */}
            <motion.div
                style={{ opacity }}
                className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"
            />

            {/* Moving Grid Layer */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <motion.div
                className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
                style={{
                    backgroundPosition: "center top",
                    transformOrigin: "center top",
                    y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) // subtle move
                }}
            />
        </div>
    );
}
