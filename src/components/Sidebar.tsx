import { Home, Folder, User, Mail, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from './Typewriter';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Folder, label: 'Projects', path: '/projects' },
        { icon: User, label: 'About', path: '/about' },
        { icon: Wrench, label: 'Tools', path: '/tools' },
        { icon: Mail, label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mahmoud-alkady', icon: null },
        { label: 'Github', url: 'https://github.com/mahmoudallkady', icon: null },
        { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01ec10e4c5e3cc7482', icon: null },
    ];

    return (
        <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-gray-200 flex flex-col p-6 overflow-y-auto">
            {/* Profile Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-1">
                    <img
                        src="/images/profile.webp"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    {/* ... inside Sidebar component ... */}

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
                            <div className="flex items-center gap-2">
                                {/* Icon placeholder if needed */}
                                <span>{link.label}</span>
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
