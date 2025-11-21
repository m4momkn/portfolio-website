import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import content from '../data/content.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300',
                isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold font-heading text-white">
                        ME<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text hover:text-accent transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={content.contact.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary border border-accent/20 hover:border-accent text-accent px-6 py-2 rounded-full transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm font-medium"
                        >
                            Book a Call
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text hover:text-accent py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={content.contact.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-background font-bold py-3 rounded-lg text-center mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Book a Call
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
