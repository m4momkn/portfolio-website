import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Calendar, CheckCircle, Loader2 } from 'lucide-react';
import content from '../data/content.json';
import { useEmailFallback } from '../hooks/useEmailFallback';

const ContactEmailLink = ({ email }: { email: string }) => {
    const { showEmail, copied, handleEmailClick } = useEmailFallback(email);

    return (
        <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="text-gray-400 hover:text-accent transition-colors block"
        >
            {showEmail ? (copied ? 'Copied to clipboard!' : email) : email}
        </a>
    );
};

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        projectType: 'Automation',
        message: '',
        budget: '5k-10k',
        timeline: '1-3 months'
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset form after success
            setFormState({
                name: '',
                email: '',
                company: '',
                projectType: 'Automation',
                message: '',
                budget: '5k-10k',
                timeline: '1-3 months'
            });
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Contact Info & Calendar */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-4">Let's Talk</h1>
                            <p className="text-gray-400 leading-relaxed">
                                Ready to automate your business? Fill out the form or book a call directly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-accent">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Email</h3>
                                    <ContactEmailLink email={content.personal.email} />
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-accent">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Location</h3>
                                    <p className="text-gray-400">{content.personal.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Calendar className="text-accent" /> Book a Call
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Skip the back-and-forth. Schedule a 30-minute discovery call directly on my calendar.
                            </p>
                            <a
                                href={content.contact.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 bg-accent text-background font-bold text-center rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                View Calendar
                            </a>
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 text-success">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-8 text-accent hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formState.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                                placeholder="Company Ltd."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Project Type</label>
                                            <select
                                                name="projectType"
                                                value={formState.projectType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                            >
                                                <option>Automation</option>
                                                <option>AI Integration</option>
                                                <option>Consulting</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 className="animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
