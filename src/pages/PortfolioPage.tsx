import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code, Zap, Bot, MessageSquare, Brain, Video, Palette, Maximize2, X, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const PortfolioPage = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = ['All', 'Business Automation', 'AI Automation', 'Chatbots & Agents', 'AI Agents', 'Content Automation', 'Creative Automation'];

    const getProjectIcon = (category: string) => {
        switch (category) {
            case 'Business Automation': return <Zap className="w-6 h-6" />;
            case 'AI Automation': return <Bot className="w-6 h-6" />;
            case 'Chatbots & Agents': return <MessageSquare className="w-6 h-6" />;
            case 'AI Agents': return <Brain className="w-6 h-6" />;
            case 'Content Automation': return <Video className="w-6 h-6" />;
            case 'Creative Automation': return <Palette className="w-6 h-6" />;
            default: return <Code className="w-6 h-6" />;
        }
    };

    const filteredProjects = content.projects.filter(project => {
        const matchesFilter = filter === 'All' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A selection of my recent work in AI automation, computer vision, and system integration.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-accent text-background font-bold'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 flex flex-col h-full"
                            >
                                {/* Project Image */}
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    {project.image && !project.image.includes('unsplash') ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:text-accent/50 transition-colors">
                                            {getProjectIcon(project.category)}
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10 z-10">
                                        {project.category}
                                    </div>
                                    {project.image && !project.image.includes('unsplash') && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedImage(project.image);
                                            }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:text-black z-20 transform scale-90 group-hover:scale-100"
                                        >
                                            <Maximize2 className="w-6 h-6" />
                                        </button>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <Link to={`/portfolio/${project.id}`} className="block group/title">
                                        <h3 className="text-xl font-bold text-white group-hover/title:text-accent transition-colors mb-2">
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <Link
                                            to={`/portfolio/${project.id}`}
                                            className="text-sm font-bold text-accent hover:text-white transition-colors flex items-center gap-2"
                                        >
                                            View Case Study
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
                        <button
                            onClick={() => { setFilter('All'); setSearchQuery(''); }}
                            className="mt-4 text-accent hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Project Full View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioPage;
