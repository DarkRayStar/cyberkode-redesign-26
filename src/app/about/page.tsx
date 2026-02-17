import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Cyberkode',
    description: 'Learn about our team, mission, and history.',
};

export default function AboutPage() {
    return (
        <div className="container px-4 md:px-6 py-24">
            <h1 className="text-4xl font-bold mb-8 text-primary">About Us</h1>
            <p className="text-lg text-gray-600">
                We are a dedicated team of professionals committed to delivering excellence in digital solutions.
                Content is currently under development.
            </p>
        </div>
    );
}
