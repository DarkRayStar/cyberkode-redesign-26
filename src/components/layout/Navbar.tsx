"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
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
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-foreground">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background border-l border-white/10">
                                <div className="flex flex-col space-y-4 mt-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-foreground/80 hover:text-primary text-lg font-medium py-2 border-b border-white/5"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <div className="pt-4">
                                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
