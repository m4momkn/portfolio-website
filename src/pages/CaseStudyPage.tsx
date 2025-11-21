
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, AlertCircle, Layers } from 'lucide-react';

const CaseStudyPage = () => {
    const { id } = useParams();
    console.log(id); // Use id to avoid lint error

    // In a real app, you'd fetch data based on ID. For now, we'll use static data for a demo.
    const project = {
        title: "E-commerce Order Fulfillment Automation",
        client: "Mid-sized E-commerce Retailer",
        industry: "Retail / E-commerce",
        challenge: "Processing 200+ daily orders manually across Shopify, inventory system, and fulfillment center was taking 3 hours daily and causing frequent errors in shipping.",
        solution: "Built comprehensive n8n workflow connecting Shopify webhook → inventory check → fulfillment center API → customer notification → accounting sync.",
        results: [
            { label: "Time Saved", value: "90%", desc: "From 3 hours to 15 mins daily" },
            { label: "Error Rate", value: "0.1%", desc: "Reduced from 5%" },
            { label: "ROI", value: "2 Mo", desc: "Payback period" }
        ],
        tech: ["n8n", "Shopify", "Google Sheets", "ShipStation", "QuickBooks", "Slack"],
        workflowSteps: [
            "Shopify Webhook triggers on new order",
            "Check inventory in Google Sheets/Database",
            "Send order to ShipStation API",
            "Update Shopify status & notify customer",
            "Sync transaction to QuickBooks",
            "Send summary alert to Slack"
        ]
    };

    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                                {project.industry}
                            </span>
                            <span className="text-gray-400 text-sm">
                                Client: {project.client}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {project.results.map((res, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <div className="text-3xl font-bold text-white mb-1">{res.value}</div>
                                <div className="text-accent font-medium mb-2">{res.label}</div>
                                <div className="text-sm text-gray-400">{res.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <AlertCircle className="text-secondary" /> The Challenge
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-secondary/50 pl-6">
                                {project.challenge}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <TrendingUp className="text-success" /> The Solution
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {project.solution}
                            </p>

                            <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-6">Workflow Architecture</h3>
                                <div className="space-y-4">
                                    {project.workflowSteps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">
                                                {i + 1}
                                            </div>
                                            <div className="h-px flex-grow bg-white/10"></div>
                                            <div className="w-full max-w-md bg-white/5 p-4 rounded-lg text-gray-300 text-sm border border-white/5">
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Layers className="text-accent" /> Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 border border-white/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <div className="pt-12 border-t border-white/10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-6">Need Similar Automation?</h3>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                            >
                                Schedule a Discovery Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPage;
