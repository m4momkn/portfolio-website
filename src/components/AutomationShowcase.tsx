import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Mail, MessageSquare, FileText, CheckCircle, XCircle, Zap, AlertCircle, Clock, DollarSign } from 'lucide-react';

const AutomationShowcase = () => {
    const [mode, setMode] = useState<'manual' | 'automated'>('manual');


    const manualSteps = [
        { id: 1, icon: <Mail className="text-gray-400" />, label: "Receive Email", x: 0, y: 0 },
        { id: 2, icon: <FileText className="text-gray-400" />, label: "Copy Data", x: 100, y: 50 },
        { id: 3, icon: <Database className="text-gray-400" />, label: "Paste to CRM", x: 200, y: 0 },
        { id: 4, icon: <MessageSquare className="text-gray-400" />, label: "Slack Team", x: 300, y: 50 },
        { id: 5, icon: <CheckCircle className="text-gray-400" />, label: "Done", x: 400, y: 0 },
    ];

    const automatedSteps = [
        { id: 1, icon: <Mail className="text-white" />, label: "Webhook Trigger", x: 0, y: 0 },
        { id: 2, icon: <Zap className="text-accent" />, label: "AI Extraction", x: 150, y: 0 },
        { id: 3, icon: <Database className="text-white" />, label: "Update CRM", x: 300, y: 0 },
        { id: 4, icon: <MessageSquare className="text-white" />, label: "Notify Slack", x: 450, y: 0 },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        The <span className="text-accent">Automation</span> Difference
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        See how intelligent workflows transform chaotic manual processes into streamlined efficiency.
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={`text-lg font-medium ${mode === 'manual' ? 'text-white' : 'text-gray-500'}`}>Manual Process</span>
                        <button
                            onClick={() => setMode(mode === 'manual' ? 'automated' : 'manual')}
                            className="w-16 h-8 bg-white/10 rounded-full p-1 relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                layout
                                className={`w-6 h-6 rounded-full shadow-lg ${mode === 'automated' ? 'bg-accent ml-8' : 'bg-gray-400'}`}
                            />
                        </button>
                        <span className={`text-lg font-medium ${mode === 'automated' ? 'text-accent' : 'text-gray-500'}`}>Automated Workflow</span>
                    </div>
                </div>

                {/* Visualization Container */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 min-h-[400px] relative overflow-hidden">

                    <AnimatePresence mode="wait">
                        {mode === 'manual' ? (
                            <motion.div
                                key="manual"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative h-full flex flex-col items-center justify-center gap-8"
                            >
                                <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl">
                                    {manualSteps.map((step, index) => (
                                        <motion.div
                                            key={step.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col items-center gap-3 relative"
                                        >
                                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative group hover:border-red-500/50 transition-colors">
                                                {step.icon}
                                                {index < manualSteps.length - 1 && (
                                                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-red-500/50 hidden md:block">
                                                        <XCircle size={16} />
                                                    </div>
                                                )}
                                                {/* Chaos Lines */}
                                                {index < manualSteps.length - 1 && (
                                                    <svg className="absolute left-full top-1/2 w-12 h-12 pointer-events-none hidden md:block" style={{ overflow: 'visible' }}>
                                                        <path
                                                            d="M0,0 C20,-20 20,20 40,0"
                                                            fill="none"
                                                            stroke="rgba(239, 68, 68, 0.3)"
                                                            strokeWidth="2"
                                                            strokeDasharray="4 4"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-sm text-gray-400">{step.label}</span>

                                            {/* Error Simulation */}
                                            {index === 1 && (
                                                <motion.div
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="absolute -top-2 -right-2 text-red-500"
                                                >
                                                    <AlertCircle size={20} />
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                                        <Clock className="text-red-500" />
                                        <div>
                                            <div className="text-red-500 font-bold">Time Consuming</div>
                                            <div className="text-xs text-gray-400">2-3 hours/day wasted</div>
                                        </div>
                                    </div>
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                                        <AlertCircle className="text-red-500" />
                                        <div>
                                            <div className="text-red-500 font-bold">Error Prone</div>
                                            <div className="text-xs text-gray-400">High risk of data entry errors</div>
                                        </div>
                                    </div>
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                                        <DollarSign className="text-red-500" />
                                        <div>
                                            <div className="text-red-500 font-bold">Expensive</div>
                                            <div className="text-xs text-gray-400">High operational costs</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="automated"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative h-full flex flex-col items-center justify-center gap-12"
                            >
                                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 max-w-5xl w-full">
                                    {automatedSteps.map((step, index) => (
                                        <div key={step.id} className="flex items-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.2 }}
                                                className="flex flex-col items-center gap-3 relative z-10"
                                            >
                                                <div className={`w-20 h-20 ${index === 1 ? 'bg-accent/20 border-accent shadow-[0_0_30px_rgba(0,240,255,0.3)]' : 'bg-white/10 border-white/20'} border rounded-2xl flex items-center justify-center relative backdrop-blur-sm`}>
                                                    {step.icon}
                                                    {index === 1 && (
                                                        <motion.div
                                                            className="absolute inset-0 rounded-2xl border border-accent"
                                                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                                                            transition={{ repeat: Infinity, duration: 2 }}
                                                        />
                                                    )}
                                                </div>
                                                <span className={`text-sm font-medium ${index === 1 ? 'text-accent' : 'text-white'}`}>{step.label}</span>
                                            </motion.div>

                                            {index < automatedSteps.length - 1 && (
                                                <div className="w-12 md:w-24 h-1 bg-white/10 relative mx-2 overflow-hidden rounded-full">
                                                    <motion.div
                                                        className="absolute top-0 left-0 h-full w-1/2 bg-accent shadow-[0_0_10px_#00F0FF]"
                                                        animate={{ x: ["-100%", "200%"] }}
                                                        transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: index * 0.2 }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                                    <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl flex items-center gap-3">
                                        <Clock className="text-accent" />
                                        <div>
                                            <div className="text-accent font-bold">Instant</div>
                                            <div className="text-xs text-gray-400">Processed in milliseconds</div>
                                        </div>
                                    </div>
                                    <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl flex items-center gap-3">
                                        <CheckCircle className="text-accent" />
                                        <div>
                                            <div className="text-accent font-bold">100% Accurate</div>
                                            <div className="text-xs text-gray-400">Zero data entry errors</div>
                                        </div>
                                    </div>
                                    <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl flex items-center gap-3">
                                        <DollarSign className="text-accent" />
                                        <div>
                                            <div className="text-accent font-bold">Cost Effective</div>
                                            <div className="text-xs text-gray-400">Scale without adding headcount</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AutomationShowcase;
