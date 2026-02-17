"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function HomeContact() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Shape for Left Side */}
            {/* Background Shape Removed as per user feedback */}
            <div className="absolute top-0 left-0 w-[50%] h-full pointer-events-none z-0 hidden lg:block">
                {/* Optional: Add a subtle gradient glow instead if needed, but for now keeping it clean */}
            </div>

            <div className="container px-4 md:px-6 relative z-10 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Column: Illustration */}
                    <div className="relative order-2 lg:order-1 hidden lg:block">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full aspect-[4/3] max-w-[600px] mx-auto"
                        >
                            <img
                                src="/images/contact.png"
                                alt="Contact Illustration"
                                className="object-contain w-full h-full drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="order-1 lg:order-2">
                        <div className="mb-8 md:mb-10 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                                Get In Touch With Us
                            </h2>
                            <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0">
                                Have you got any project in your mind? Simply send us a message. We'll get back to you soon.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Input
                                        placeholder="First Name"
                                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        placeholder="Last Name"
                                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Email Address"
                                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="tel"
                                        placeholder="Phone No"
                                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Textarea
                                    placeholder="Message"
                                    className="min-h-[180px] rounded-[30px] px-8 py-6 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 resize-none focus-visible:ring-1 focus-visible:ring-primary/50"
                                />
                            </div>

                            {/* ReCAPTCHA View Placeholder */}
                            <div className="py-2">
                                <div className="w-[300px] h-[74px] bg-secondary/10 border border-white/5 rounded-[3px] flex items-center justify-center text-xs text-gray-500 shadow-sm">
                                    I'm not a robot (ReCAPTCHA Placeholder)
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="min-w-[180px] bg-[#ff5722] hover:bg-[#ff5722]/90 text-white font-bold rounded-full h-[55px] text-sm tracking-wider shadow-lg uppercase"
                                >
                                    Reach Us
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
