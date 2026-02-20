import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="max-w-3xl py-20 text-center mx-auto">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist."
            />
            <h1 className="text-8xl font-bold text-gray-200 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
