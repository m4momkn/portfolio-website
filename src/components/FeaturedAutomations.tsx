import { motion } from 'framer-motion';
import { ShoppingCart, Share2, Zap, Bot } from 'lucide-react';
import content from '../data/content.json';

const FeaturedAutomations = () => {
    // Get the first 3 projects from content.json
    const projects = content.projects.slice(0, 3);

    const getIcon = (category: string) => {
        if (category.includes("Business")) return <ShoppingCart className="w-6 h-6" />;
        if (category.includes("AI")) return <Bot className="w-6 h-6" />;
        if (category.includes("Chatbot")) return <Share2 className="w-6 h-6" />;
        return <Zap className="w-6 h-6" />;
    };

    return (
        <section id="portfolio" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Automations</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Real-world examples of how intelligent workflows transform business operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors flex flex-col"
                        >
                            <div className="h-2 w-full bg-gradient-to-r from-accent to-secondary"></div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/10 rounded-lg text-white">
                                        {getIcon(project.category)}
                                    </div>
                                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 border-b border-white/10 pb-6 flex-grow">
                                    "{project.description}"
                                </p>

                                <div className="space-y-3 mb-8">
                                    {project.results.map((result, i) => (
                                        <div key={i} className="flex items-center text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-success mr-2"></div>
                                            {result}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAutomations;
