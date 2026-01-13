import content from '../data/content.json';
import { Zap, Brain, Database, Briefcase } from 'lucide-react';

const ToolsPage = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Zap': return <Zap className="w-5 h-5" />;
            case 'Brain': return <Brain className="w-5 h-5" />;
            case 'Database': return <Database className="w-5 h-5" />;
            case 'Briefcase': return <Briefcase className="w-5 h-5" />;
            default: return <Zap className="w-5 h-5" />;
        }
    };

    return (
        <div className="max-w-4xl">
            <div className="animate-fade-in-up">
                <h1 className="text-4xl font-bold mb-2">Tools & Tech Stack</h1>
                <p className="text-gray-600 mb-12">The technologies I use to build intelligent automation systems.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.about.expertise.map((category, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
                                    {getIcon(category.icon)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <span key={i} className="bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-md text-sm font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToolsPage;
