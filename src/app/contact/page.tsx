import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Cyberkode',
    description: 'Get in touch with us for your next project.',
};

export default function ContactPage() {
    return (
        <div className="container px-4 md:px-6 py-24">
            <h1 className="text-4xl font-bold mb-8 text-primary">Contact Us</h1>
            <p className="text-lg text-gray-600">
                We'd love to hear from you. Reach out to discuss your project requirements.
                Content is currently under development.
            </p>
        </div>
    );
}
