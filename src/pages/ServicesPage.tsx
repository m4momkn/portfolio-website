import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Workflow, Link, RefreshCw, Users, ShoppingCart, Mail, BarChart, Brain, ChevronDown, ChevronUp, CheckCircle, Bot, Image, LayoutDashboard } from 'lucide-react';
import content from '../data/content.json';

const ServicesPage = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Workflow': return <Workflow className="w-8 h-8" />;
            case 'Link': return <Link className="w-8 h-8" />;
            case 'RefreshCw': return <RefreshCw className="w-8 h-8" />;
            case 'Users': return <Users className="w-8 h-8" />;
            case 'ShoppingCart': return <ShoppingCart className="w-8 h-8" />;
            case 'Mail': return <Mail className="w-8 h-8" />;
            case 'BarChart': return <BarChart className="w-8 h-8" />;
            case 'Brain': return <Brain className="w-8 h-8" />;
            case 'Bot': return <Bot className="w-8 h-8" />;
            case 'Image': return <Image className="w-8 h-8" />;
            case 'LayoutDashboard': return <LayoutDashboard className="w-8 h-8" />;
            default: return <Workflow className="w-8 h-8" />;
        }
    };

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        My Services
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive automation solutions tailored to your business needs.
                        From simple integrations to complex, AI-powered systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.services.map((service) => (
                        <motion.div
                            key={service.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all ${expandedId === service.id ? 'ring-1 ring-accent/50' : ''
                                }`}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 bg-white/5 rounded-xl text-accent`}>
                                        {getIcon(service.icon)}
                                    </div>
                                    <button
                                        onClick={() => toggleExpand(service.id)}
                                        className="p-2 hover:bg-white/5 rounded-full text-gray-400 transition-colors"
                                    >
                                        {expandedId === service.id ? <ChevronUp /> : <ChevronDown />}
                                    </button>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <AnimatePresence>
                                    {expandedId === service.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="border-t border-white/10 pt-6 mt-6"
                                        >
                                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">What's Included</h4>
                                            <ul className="space-y-3 mb-6">
                                                {service.features.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                <RouterLink
                                                    to="/contact"
                                                    className="px-6 py-2 bg-white text-background font-bold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                                                >
                                                    Get Started
                                                </RouterLink>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {expandedId !== service.id && (
                                    <button
                                        onClick={() => toggleExpand(service.id)}
                                        className="w-full py-2 mt-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center justify-center gap-1"
                                    >
                                        View Details <ChevronDown size={16} />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
