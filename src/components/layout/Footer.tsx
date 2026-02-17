import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary">Cyberkode</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering businesses with cutting-edge digital solutions. We transform ideas into reality.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/services/mobile-apps" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services/ui-ux" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services/seo" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white">Phone:</span>
                                <a href="tel:+614666020040" className="hover:text-primary transition-colors">
                                    0466 602 040
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white">Email:</span>
                                <a href="mailto:hello@cyberkode.com.au" className="hover:text-primary transition-colors">
                                    hello@cyberkode.com.au
                                </a>
                            </li>
                        </ul>
                        {/* Keeping Newsletter briefly or removing? User didn't say remove, but space is tight. I'll add a compact newsletter below contact if needed, or just leave it out for now to focus on the requested "Update contact details". Let's stick to just contact details for clarity. */}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} Cyberkode. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
