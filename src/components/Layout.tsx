import { useState } from 'react';
import type { ReactNode } from 'react';
import Sidebar, { MobileMenuButton } from './Sidebar';
import StarryBackground from './StarryBackground';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-transparent text-text font-sans relative">
            <StarryBackground />

            {/* Mobile menu button */}
            <MobileMenuButton onClick={() => setSidebarOpen(true)} />

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <main className="flex-1 p-6 pt-16 md:pt-8 md:p-12 lg:p-16 max-w-4xl mx-auto w-full">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
