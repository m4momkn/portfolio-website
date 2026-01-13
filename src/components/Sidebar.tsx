import { Home, Folder, User, Mail, Wrench, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from './Typewriter';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Folder, label: 'Projects', path: '/projects' },
        { icon: User, label: 'About', path: '/about' },
        { icon: Wrench, label: 'Tools', path: '/tools' },
        { icon: Mail, label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mahmoud-alkady' },
        { label: 'Github', url: 'https://github.com/mahmoudallkady' },
        { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01ec10e4c5e3cc7482' },
    ];

    const handleNavClick = () => {
        // Close sidebar on mobile after navigation
        if (window.innerWidth < 768) {
            onClose();
        }
    };

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-gray-200 
          flex flex-col p-6 overflow-y-auto z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
            >
                {/* Close button for mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 md:hidden"
                    aria-label="Close menu"
                >
                    <X size={24} />
                </button>

                {/* Profile Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-1">
                        <img
                            src="/images/profile.webp"
                            alt="Profile"
                            width="40"
                            height="40"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-bold text-lg leading-tight">Mahmoud Elkady</h2>
                            <div className="text-xs text-muted h-4">
                                <Typewriter
                                    words={['AI Specialist', 'Automation Specialist', 'n8n Expert']}
                                    typingSpeed={100}
                                    deletingSpeed={50}
                                    pauseTime={2000}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-1 mb-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={handleNavClick}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Connect Section */}
                <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-500 mb-3 px-3">Connect</h3>
                    <div className="space-y-1">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md group"
                            >
                                <span>{link.label}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

// Mobile menu button component
export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-sm md:hidden"
            aria-label="Open menu"
        >
            <Menu size={24} />
        </button>
    );
};

export default Sidebar;
