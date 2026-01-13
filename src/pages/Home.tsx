import content from '../data/content.json';
import { lazy, Suspense } from 'react';

// Lazy load InteractiveAvatar (only component needing framer-motion)
const InteractiveAvatar = lazy(() => import('../components/InteractiveAvatar'));

const Home = () => {
    return (
        <div className="max-w-3xl">
            {/* Hero Section with Avatar */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-8">
                {/* LCP Content - immediate render */}
                <div className="flex-1 animate-fade-in-up">
                    <h1 className="text-5xl font-bold mb-4 text-primary">
                        Hey, I'm <span className="bg-gray-200 px-2 rounded-md inline-block">Mahmoud</span>
                    </h1>

                    <h2 className="text-3xl font-bold text-gray-400 mb-8">
                        {content.personal.role}
                    </h2>
                </div>

                {/* Avatar - no placeholder, flies in when ready */}
                <div className="flex justify-center md:justify-end mt-8 md:mt-0 min-h-[160px] md:min-h-[208px]">
                    <Suspense fallback={null}>
                        <InteractiveAvatar />
                    </Suspense>
                </div>
            </div>

            {/* Main content */}
            <div className="animate-fade-in-up animation-delay-100">
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        {content.about.story}
                    </p>

                    <p>
                        Based in <span className="font-semibold">{content.personal.location}</span>.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-gray-200">
                    {content.hero.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 animate-fade-in animation-delay-300">
                    <p className="text-gray-600 mb-4">
                        You can talk to me about <span className="font-bold text-gray-900">AI, Automation, n8n, or anything else.</span>
                    </p>
                    <div className="flex items-center gap-2 text-xl font-medium">
                        Say Hi on
                        <a href="https://www.linkedin.com/in/mahmoud-alkady" className="border-b-2 border-black hover:bg-black hover:text-white transition-colors px-1">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
