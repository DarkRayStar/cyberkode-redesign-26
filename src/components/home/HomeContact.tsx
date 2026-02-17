"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactFormContent() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending...' });

        if (!executeRecaptcha) {
            setStatus({ type: 'error', message: 'ReCAPTCHA not ready. Please check your connection.' });
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstName', formData.firstName);
            formDataToSend.append('lastName', formData.lastName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('message', formData.message);

            const res = await fetch("https://formspree.io/f/mvzbrlvy", {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
            }
        } catch (error: any) {
            console.error("Submission Error:", error);
            setStatus({ type: 'error', message: `Failed: ${error.message || 'Connection Error'}` });
        }
    }, [executeRecaptcha, formData]);

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                </div>
                <div className="space-y-2">
                    <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                </div>
                <div className="space-y-2">
                    <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone No"
                        className="rounded-full h-[55px] px-8 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="min-h-[180px] rounded-[30px] px-8 py-6 border border-white/10 bg-secondary/20 text-white placeholder:text-gray-500 resize-none focus-visible:ring-1 focus-visible:ring-primary/50"
                />
            </div>

            {/* Status Message */}
            {status.message && (
                <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                    {status.message}
                </div>
            )}

            <div className="pt-2">
                <Button
                    type="submit"
                    disabled={status.type === 'loading'}
                    size="lg"
                    className="min-w-[180px] bg-[#ff5722] hover:bg-[#ff5722]/90 text-white font-bold rounded-full h-[55px] text-sm tracking-wider shadow-lg uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status.type === 'loading' ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Reach Us"
                    )}
                </Button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
                Protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline hover:text-white">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline hover:text-white">Terms of Service</a> apply.
            </p>
        </form>
    );
}

export function HomeContact() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[50%] h-full pointer-events-none z-0 hidden lg:block">
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

                        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LepvG4sAAAAAIG75-V55EjFHS3dHaYtD3tL8jtZ"}>
                            <ContactFormContent />
                        </GoogleReCaptchaProvider>
                    </div>
                </div>
            </div>
        </section>
    );
}
