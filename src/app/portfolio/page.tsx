import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Cyberkode',
    description: 'Check out our recent projects and success stories.',
};

export default function PortfolioPage() {
    return (
        <div className="container px-4 md:px-6 py-24">
            <h1 className="text-4xl font-bold mb-8 text-primary">Our Portfolio</h1>
            <p className="text-lg text-gray-600">
                Browse through our collection of successful projects.
                Content is currently under development.
            </p>
        </div>
    );
}
