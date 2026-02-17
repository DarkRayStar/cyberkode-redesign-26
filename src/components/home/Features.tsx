import { Code, Smartphone, BarChart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const features = [
    {
        title: "Web & Mobile Solutions",
        description: "High-performance websites and native applications built for scalability and user engagement.",
        icon: Smartphone,
    },
    {
        title: "AI Agentic Solutions",
        description: "Intelligent autonomous agents that automate complex workflows and enhance decision-making.",
        icon: Code, // Using Code icon for AI temporarily
    },
    {
        title: "PWA (Progressive Web Apps)",
        description: "Seamless, app-like experiences on the web with offline capabilities and push notifications.",
        icon: BarChart, // Using BarChart as placeholder or maybe a better existing icon if available
    },
    {
        title: "IoT Solutions",
        description: "Connecting devices and data to create smart, integrated ecosystems for your business.",
        icon: Shield, // Using Shield as placeholder
    },
];

export function Features() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                        Our Services
                    </h2>
                    <p className="mt-4 text-gray-400 md:text-xl">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <SpotlightCard key={index} className="group hover:-translate-y-2 h-full flex flex-col backdrop-blur-sm">
                            <CardHeader className="flex flex-col items-center pt-8">
                                <div className="p-4 bg-white/5 group-hover:bg-primary/20 rounded-2xl mb-4 text-primary transition-all duration-300 ring-1 ring-white/10 group-hover:ring-primary/50 group-hover:scale-110">
                                    <feature.icon size={32} strokeWidth={1.5} />
                                </div>
                                <CardTitle className="text-xl font-bold text-center text-white group-hover:text-primary transition-colors">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-center text-gray-400 leading-relaxed group-hover:text-gray-300 text-sm">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
