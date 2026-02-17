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

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest tech trends and updates.
                        </p>
                        <div className="flex space-x-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                            />
                            <Button size="icon" className="bg-primary hover:bg-primary/90 text-white shrink-0">
                                <Send size={18} />
                            </Button>
                        </div>
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
