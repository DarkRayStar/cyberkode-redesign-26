import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Ready to Start Your Digital Transformation?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl mb-8">
                    Let's build something amazing together. Contact us today for a free consultation.
                </p>
                <Link href="/contact">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-bold px-8">
                        Get in Touch
                    </Button>
                </Link>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl opacity-50" />
        </section>
    );
}
