
import { ArrowRight, Mail } from 'lucide-react';
import content from '../data/content.json';

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-secondary/20"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Let's build intelligent workflows that save you time and scale your operations.
                    Book a free 30-minute discovery call to discuss your automation needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href={content.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
                    >
                        Schedule Your Free Consultation
                        <ArrowRight size={20} />
                    </a>
                    <a
                        href={`mailto:${content.personal.email}`}
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <Mail size={20} />
                        Email me directly
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
