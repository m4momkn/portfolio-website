import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Workflow, Link, RefreshCw, Users, ShoppingCart, Mail, BarChart, Brain, ChevronDown, ChevronUp, CheckCircle, Bot, Image, LayoutDashboard } from 'lucide-react';
import content from '../data/content.json';
import SEO from '../components/SEO';

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
            <SEO
                title="Services"
                description="Comprehensive automation solutions — from simple integrations to complex, AI-powered systems. End-to-end AI automation, CRM integration, custom agents, and more."
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        My Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive automation solutions tailored to your business needs.
                        From simple integrations to complex, AI-powered systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.services.map((service) => (
                        <div
                            key={service.id}
                            className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent/30 transition-all ${expandedId === service.id ? 'ring-1 ring-accent/50' : ''
                                }`}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-100 rounded-xl text-accent">
                                        {getIcon(service.icon)}
                                    </div>
                                    <button
                                        onClick={() => toggleExpand(service.id)}
                                        className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
                                    >
                                        {expandedId === service.id ? <ChevronUp /> : <ChevronDown />}
                                    </button>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {expandedId === service.id && (
                                    <div className="border-t border-gray-200 pt-6 mt-6 animate-fade-in">
                                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">What's Included</h4>
                                        <ul className="space-y-3 mb-6">
                                            {service.features.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <RouterLink
                                                to="/contact"
                                                className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm"
                                            >
                                                Get Started
                                            </RouterLink>
                                        </div>
                                    </div>
                                )}

                                {expandedId !== service.id && (
                                    <button
                                        onClick={() => toggleExpand(service.id)}
                                        className="w-full py-2 mt-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center justify-center gap-1"
                                    >
                                        View Details <ChevronDown size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
