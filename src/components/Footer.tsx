import { Mail } from 'lucide-react';
import content from '../data/content.json';

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

                        <a href={`mailto:${content.personal.email}`} className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
