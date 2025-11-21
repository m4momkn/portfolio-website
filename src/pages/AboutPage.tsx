import { motion } from 'framer-motion';
import { Code, Database, Zap, Brain, Briefcase } from 'lucide-react';
import content from '../data/content.json';

const AboutPage = () => {
    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white/10 relative z-10 bg-white/5 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center text-accent">
                                        <Brain size={64} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{content.personal.name}</h3>
                                    <p className="text-gray-400">{content.personal.role}</p>
                                </div>
                            </div>
                            <div className="absolute top-10 -right-10 w-full h-full border-2 border-accent/20 rounded-2xl -z-0 hidden md:block"></div>
                            <div className="absolute -bottom-10 -left-10 w-full h-full bg-white/5 rounded-2xl -z-0 hidden md:block"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About Me
                        </h1>
                        <h2 className="text-2xl text-accent mb-6">
                            {content.personal.role}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            {content.about.story}
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-1">1.5+</div>
                                <div className="text-sm text-gray-500">Years Experience</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-sm text-gray-500">Projects Delivered</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.about.expertise.map((category, index) => (
                            <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 transition-colors group">
                                {(() => {
                                    switch (category.icon) {
                                        case 'Zap': return <Zap className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />;
                                        case 'Brain': return <Brain className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />;
                                        case 'Database': return <Database className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />;
                                        case 'Briefcase': return <Briefcase className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />;
                                        default: return <Code className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />;
                                    }
                                })()}
                                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:bg-white/10 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
