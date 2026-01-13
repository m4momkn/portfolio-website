import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
}

import StarryBackground from './StarryBackground';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex min-h-screen bg-transparent text-text font-sans relative">
            <StarryBackground />
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                <main className="flex-1 p-8 md:p-12 lg:p-16 max-w-4xl mx-auto w-full">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
