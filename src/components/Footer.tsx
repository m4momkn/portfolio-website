const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto py-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© {currentYear} Mahmoud Elkady. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
