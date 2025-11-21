import { Mail } from 'lucide-react';
import content from '../data/content.json';
import { useEmailFallback } from '../hooks/useEmailFallback';

const FooterEmailLink = ({ email }: { email: string }) => {
    const { showEmail, copied, handleEmailClick } = useEmailFallback(email);

    return (
        <div className="relative group">
            <a
                href={`mailto:${email}`}
                onClick={handleEmailClick}
                className="text-gray-400 hover:text-white transition-colors block"
            >
                <Mail size={20} />
            </a>
            {showEmail && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white whitespace-nowrap">
                    {copied ? 'Copied!' : email}
                </div>
            )}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">{content.personal.name}</h3>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} — {content.personal.role}
                        </p>
                    </div>

                    <div className="flex gap-6">

                        <FooterEmailLink email={content.personal.email} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
