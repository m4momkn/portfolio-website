
import { motion } from 'framer-motion';
import { Phone, PenTool, Zap, Rocket } from 'lucide-react';

const ProcessTimeline = () => {
    const steps = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Discovery Call",
            description: "We discuss your business challenges, manual processes, and automation goals."
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Workflow Design",
            description: "I map out your ideal automation architecture and create a detailed implementation plan."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Build & Test",
            description: "Development of your custom workflows with rigorous testing to ensure reliability."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Launch & Support",
            description: "Smooth deployment with training and ongoing support to optimize your automation."
        }
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A simple, transparent process to take you from chaos to clarity.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-background p-4 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:-translate-y-2 h-full flex flex-col items-center text-center relative">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-accent group-hover:text-background transition-colors">
                                        {index + 1}
                                    </div>

                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
