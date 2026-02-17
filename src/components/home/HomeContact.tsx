"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function HomeContact() {
    return (
        <section className="py-24 relative bg-white overflow-hidden">
            {/* Background Shape for Left Side */}
            <div className="absolute top-0 left-0 w-[50%] h-full pointer-events-none z-0 hidden lg:block">
                {/* Using a large SVG or div to mimic the blob shape if exact image isn't perfect, 
               but here we try to position the illustration container to match. 
               The legacy site had a background image shape_15.png, let's use that but positioned carefully.
           */}
                <img
                    src="/images/shape/shape_15.png"
                    alt=""
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-[800px] object-contain opacity-20 md:opacity-100"
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Illustration */}
                    <div className="relative">
                        <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto">
                            <img
                                src="/images/contact.png"
                                alt="Contact Illustration"
                                className="object-contain w-full h-full drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-4xl font-extrabold tracking-tight text-[#011a3e] mb-4">
                                Get In Touch With Us
                            </h2>
                            <p className="text-gray-500 text-lg max-w-lg">
                                Have you got any project in your mind? Simply send us a message. We'll get back to you soon.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Input
                                        placeholder="First Name"
                                        className="rounded-full h-[55px] px-8 border-none bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] placeholder:text-gray-400 text-base focus-visible:ring-1 focus-visible:ring-primary/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        placeholder="Last Name"
                                        className="rounded-full h-[55px] px-8 border-none bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] placeholder:text-gray-400 text-base focus-visible:ring-1 focus-visible:ring-primary/20"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Email Address"
                                        className="rounded-full h-[55px] px-8 border-none bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] placeholder:text-gray-400 text-base focus-visible:ring-1 focus-visible:ring-primary/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="tel"
                                        placeholder="Phone No"
                                        className="rounded-full h-[55px] px-8 border-none bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] placeholder:text-gray-400 text-base focus-visible:ring-1 focus-visible:ring-primary/20"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Textarea
                                    placeholder="Message"
                                    className="min-h-[180px] rounded-[30px] px-8 py-6 border-none bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] placeholder:text-gray-400 text-base resize-none focus-visible:ring-1 focus-visible:ring-primary/20"
                                />
                            </div>

                            {/* ReCAPTCHA View Placeholder */}
                            <div className="py-2">
                                <div className="w-[300px] h-[74px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] flex items-center justify-center text-xs text-gray-500 shadow-sm">
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
