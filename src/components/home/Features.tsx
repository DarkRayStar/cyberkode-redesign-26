import { Code, Smartphone, BarChart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        title: "Web Development",
        description: "Custom websites built with modern technologies like React, Next.js, and Node.js.",
        icon: Code,
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: Smartphone,
    },
    {
        title: "Digital Marketing",
        description: "SEO, social media, and content marketing strategies to grow your brand.",
        icon: BarChart,
    },
    {
        title: "Cyber Security",
        description: "Protecting your digital assets with advanced security measures.",
        icon: Shield,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-secondary/5">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                        Our Services
                    </h2>
                    <p className="mt-4 text-gray-500 md:text-xl">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="group border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2">
                            <CardHeader className="flex flex-col items-center pt-8">
                                <div className="p-4 bg-primary/5 group-hover:bg-primary/10 rounded-full mb-4 text-primary transition-colors duration-300">
                                    <feature.icon size={40} strokeWidth={1.5} />
                                </div>
                                <CardTitle className="text-xl font-bold text-center text-secondary group-hover:text-primary transition-colors">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
