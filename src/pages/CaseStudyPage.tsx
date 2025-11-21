import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, AlertCircle, Layers, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

import content from '../data/content.json';

const CaseStudyPage = () => {
    const { id } = useParams();
    const project = content.projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/portfolio" replace />;
    }

    // Cast to any to access new fields without strict type checking for now
    const p = project as any;

    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>

                <div className="max-w-4xl mx-auto">
                    {/* 1. HERO SECTION */}
                    <div className="mb-16 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                                {p.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {p.title}
                        </h1>
                        {p.subtitle && (
                            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                                {p.subtitle}
                            </p>
                        )}
                    </div>

                    {/* 2. PROJECT OVERVIEW */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {p.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {p.tech.map((t: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-sm border border-white/10">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* 3. THE CHALLENGE */}
                    {p.challenge && (
                        <section className="mb-20">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <AlertCircle className="text-secondary" /> The Challenge
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <ul className="space-y-4">
                                    {p.challenge.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                    {/* 4. THE SOLUTION */}
                    {p.solution && (
                        <section className="mb-20">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <TrendingUp className="text-success" /> The Solution — Step-by-Step
                            </h2>
                            <div className="space-y-6">
                                {p.solution.map((step: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold shrink-0 group-hover:bg-accent group-hover:text-background transition-colors">
                                            {i + 1}
                                        </div>
                                        <div className="pt-1 text-gray-300 text-lg">
                                            {step}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 5. KEY RESULTS */}
                    {p.results && (
                        <section className="mb-20">
                            <h2 className="text-2xl font-bold text-white mb-8">Key Results</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {p.results.map((result: string, i: number) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:border-accent/30 transition-colors">
                                        <CheckCircle className="text-accent shrink-0 mt-1" />
                                        <span className="text-lg text-white font-medium">{result}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 6. WORKFLOW DIAGRAM */}
                    {p.workflowDiagram && (
                        <section className="mb-20">
                            <h2 className="text-2xl font-bold text-white mb-8">Workflow Diagram</h2>
                            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    {p.workflowDiagram.map((step: string, i: number) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-medium text-center">
                                                {step}
                                            </div>
                                            {i < p.workflowDiagram.length - 1 && (
                                                <ArrowRight className="text-gray-500 shrink-0 hidden md:block" />
                                            )}
                                            {i < p.workflowDiagram.length - 1 && (
                                                <ArrowRight className="text-gray-500 shrink-0 rotate-90 md:hidden" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 7. TECH STACK */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Layers className="text-accent" /> Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {p.tech.map((t: string, i: number) => (
                                <span key={i} className="px-6 py-3 bg-white/5 rounded-xl text-white font-medium border border-white/10 text-lg">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* 8. FINAL CTA */}
                    {p.cta && (
                        <div className="pt-16 border-t border-white/10 text-center">
                            <h3 className="text-3xl font-bold text-white mb-8 max-w-2xl mx-auto">
                                {p.cta.text}
                            </h3>
                            <a
                                href={content.contact.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] text-lg"
                            >
                                <Calendar size={20} />
                                {p.cta.buttonText}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPage;
