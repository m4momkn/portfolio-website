import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, AlertCircle, Layers, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import content from '../data/content.json';
import SEO from '../components/SEO';
import type { Project } from '../types';

const CaseStudyPage = () => {
    const { id } = useParams();
    const project = content.projects.find(p => p.id === id) as Project | undefined;

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const p = project;

    return (
        <div className="max-w-4xl">
            <SEO
                title={p.title}
                description={p.subtitle || p.description}
                image={p.image}
                url={`https://elkady.dev/projects/${p.id}`}
            />

            <Link to="/projects" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>

            {/* 1. HERO SECTION */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">
                        {p.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {p.title}
                </h1>
                {p.subtitle && (
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        {p.subtitle}
                    </p>
                )}
            </div>

            {/* 2. PROJECT OVERVIEW */}
            <section className="mb-16">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                    {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-gray-600 text-xs border border-gray-200">
                            {t}
                        </span>
                    ))}
                </div>
            </section>

            {/* 3. THE CHALLENGE */}
            {p.challenge && (
                <section className="mb-16">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <AlertCircle className="text-gray-700 w-5 h-5" /> The Challenge
                    </h2>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <ul className="space-y-3">
                            {p.challenge.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                                    <span className="text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* 4. THE SOLUTION */}
            {p.solution && (
                <section className="mb-16">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <TrendingUp className="text-green-600 w-5 h-5" /> The Solution — Step-by-Step
                    </h2>
                    <div className="space-y-4">
                        {p.solution.map((step: string, i: number) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 text-sm font-bold shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                    {i + 1}
                                </div>
                                <div className="pt-0.5 text-gray-600 text-base">
                                    {step}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 5. KEY RESULTS */}
            {p.results && (
                <section className="mb-16">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Key Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {p.results.map((result: string, i: number) => (
                            <div key={i} className="bg-white border border-gray-200 p-5 rounded-xl flex items-start gap-3 hover:shadow-sm transition-shadow">
                                <CheckCircle className="text-green-600 shrink-0 mt-1 w-5 h-5" />
                                <span className="text-base text-gray-700 font-medium">{result}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 6. WORKFLOW DIAGRAM */}
            {p.workflowDiagram && (
                <section className="mb-16">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Workflow Diagram</h2>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {p.workflowDiagram.map((step: string, i: number) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white text-sm font-medium text-center">
                                        {step}
                                    </div>
                                    {i < p.workflowDiagram.length - 1 && (
                                        <ArrowRight className="text-gray-500 shrink-0 hidden md:block w-4 h-4" />
                                    )}
                                    {i < p.workflowDiagram.length - 1 && (
                                        <ArrowRight className="text-gray-500 shrink-0 rotate-90 md:hidden w-4 h-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 7. TECH STACK */}
            <section className="mb-16">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Layers className="text-gray-700 w-5 h-5" /> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                    {p.tech.map((t: string, i: number) => (
                        <span key={i} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium border border-gray-200">
                            {t}
                        </span>
                    ))}
                </div>
            </section>

            {/* 8. FINAL CTA */}
            {p.cta && (
                <div className="pt-12 border-t border-gray-200 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 max-w-2xl mx-auto">
                        {p.cta.text}
                    </h3>
                    <a
                        href={content.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg text-base"
                    >
                        <Calendar size={18} />
                        {p.cta.buttonText}
                    </a>
                </div>
            )}
        </div>
    );
};

export default CaseStudyPage;
