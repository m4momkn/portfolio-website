
import { Clock, Target, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
    const values = [
        {
            icon: <Clock className="w-8 h-8 text-accent" />,
            title: "Save Time",
            description: "Average 20 hours per week saved per client through intelligent automation",
            metric: "20+ hrs/week"
        },
        {
            icon: <Target className="w-8 h-8 text-secondary" />,
            title: "Reduce Errors",
            description: "Achieve 99.9% accuracy in automated processes, eliminating human error",
            metric: "99.9% accuracy"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-success" />,
            title: "Scale Operations",
            description: "Handle 10x volume without hiring additional staff",
            metric: "10x capacity"
        },
        {
            icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
            title: "Maximize ROI",
            description: "Most clients see full ROI within 3 months of implementation",
            metric: "3-month ROI"
        }
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-2 group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {item.description}
                            </p>
                            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                {item.metric}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
