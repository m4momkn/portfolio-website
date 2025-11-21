import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            quote: "Mahmoud transformed our customer onboarding process. What used to take our team 2 hours now happens automatically in minutes. The ROI was immediate.",
            name: "Sarah Johnson",
            role: "Operations Director",
            company: "TechFlow Solutions",
            rating: 5
        },
        {
            quote: "Working with Mahmoud was seamless. He understood our complex workflow requirements and delivered an automation system that exceeded expectations.",
            name: "Michael Chen",
            role: "CEO",
            company: "DataSync Inc",
            rating: 5
        },
        {
            quote: "Best investment we made this year. The lead qualification automation has dramatically improved our sales team's efficiency. We're closing 40% more deals.",
            name: "Rachel Martinez",
            role: "Head of Sales",
            company: "GrowthHub",
            rating: 5
        },
        {
            quote: "Mahmoud's expertise in both n8n and Make.com meant he could choose the perfect tool for each part of our workflow. The result is elegant and reliable.",
            name: "David Brown",
            role: "CTO",
            company: "AutomateNow",
            rating: 5
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what my clients have to say.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="absolute top-8 left-8 text-accent/20">
                            <Quote size={64} />
                        </div>

                        <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-accent text-accent" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                                        "{testimonials[activeIndex].quote}"
                                    </p>

                                    <div>
                                        <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h4>
                                        <p className="text-accent">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
