"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Home, User, Zap, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#", icon: User },
    { name: "Services", href: "#", icon: Zap },
    { name: "Portfolio", href: "#", icon: Briefcase },
    { name: "Contact", href: "#", icon: Mail },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-40 h-10">
                                {/* Using logo_1.png based on legacy site usage */}
                                <Image
                                    src="/images/logo_1.png"
                                    alt="Cyberkode Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {isMounted && (
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-foreground">
                                        <Menu className="h-6 w-6" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="bg-black/40 backdrop-blur-3xl border-l border-white/10 w-full sm:w-[400px] shadow-2xl p-0">
                                    <div className="flex flex-col h-full p-6">
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="text-xl font-bold text-white tracking-widest uppercase">Menu</span>
                                        </div>

                                        <div className="flex flex-col space-y-2">
                                            {navLinks.map((link, i) => {
                                                const Icon = link.icon;
                                                return (
                                                    <motion.div
                                                        key={link.name}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="group flex items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                                        >
                                                            <div className="p-2 mr-4 rounded-lg bg-white/5 group-hover:bg-primary/20 text-gray-400 group-hover:text-primary transition-colors">
                                                                <Icon size={20} />
                                                            </div>
                                                            <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                                                {link.name}
                                                            </span>
                                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                                                <ArrowRight size={16} className="text-primary" />
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-auto pt-8 pb-8">
                                            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-full animate-shimmer shadow-[0_0_20px_-5px_rgba(237,86,28,0.5)] border-none">
                                                Start Project <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        )}
                        {!isMounted && (
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
