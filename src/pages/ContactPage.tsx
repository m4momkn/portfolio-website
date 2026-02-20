import { useState } from 'react';
import { Mail, MapPin, Send, Calendar, CheckCircle } from 'lucide-react';
import content from '../data/content.json';
import { useEmailFallback } from '../hooks/useEmailFallback';
import SEO from '../components/SEO';

const ContactEmailLink = ({ email }: { email: string }) => {
    const { showEmail, copied, handleEmailClick } = useEmailFallback(email);

    return (
        <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="text-gray-600 hover:text-accent transition-colors block"
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            `[Portfolio Contact] ${formState.projectType} inquiry from ${formState.name}`
        );
        const body = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nProject Type: ${formState.projectType}\n\nMessage:\n${formState.message}`
        );

        window.location.href = `mailto:${content.personal.email}?subject=${subject}&body=${body}`;

        setStatus('success');
        setFormState({
            name: '',
            email: '',
            company: '',
            projectType: 'Automation',
            message: '',
            budget: '5k-10k',
            timeline: '1-3 months'
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="max-w-5xl">
            <SEO
                title="Contact"
                description="Get in touch with Mahmoud Elkady to discuss automation projects, AI integrations, or schedule a discovery call."
            />
            <div className="animate-fade-in-up">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Contact Info & Calendar */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Talk</h1>
                            <p className="text-gray-600 leading-relaxed">
                                Ready to automate your business? Fill out the form or book a call directly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-accent">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-medium mb-1">Email</h3>
                                    <ContactEmailLink email={content.personal.email} />
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-accent">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-medium mb-1">Location</h3>
                                    <p className="text-gray-600">{content.personal.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Calendar className="text-accent" /> Book a Call
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Skip the back-and-forth. Schedule a 30-minute discovery call directly on my calendar.
                            </p>
                            <a
                                href={content.contact.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 bg-black text-white font-bold text-center rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                View Calendar
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">I'll get back to you within 24 hours.</p>
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
                                            <label className="text-sm font-medium text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formState.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                                placeholder="Company Ltd."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Project Type</label>
                                            <select
                                                name="projectType"
                                                value={formState.projectType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                            >
                                                <option>Automation</option>
                                                <option>AI Integration</option>
                                                <option>Consulting</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                                    >
                                        Send Message <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
