import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Cyberkode',
    description: 'Explore our range of digital services including web development, mobile apps, and more.',
};

export default function ServicesPage() {
    return (
        <div className="container px-4 md:px-6 py-24">
            <h1 className="text-4xl font-bold mb-8 text-primary">Our Services</h1>
            <p className="text-lg text-gray-600">
                Discover how we can help your business grow with our tailored services.
                Content is currently under development.
            </p>
        </div>
    );
}
