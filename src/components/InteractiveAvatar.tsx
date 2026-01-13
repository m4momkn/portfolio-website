import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveAvatar = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const greetings = [
        "Hey there! 👋",
        "Let's automate something!",
        "Ask me about n8n!",
        "Ready to build?",
        "Drag me around! 🖱️",
    ];

    const [currentGreeting] = useState(
        greetings[Math.floor(Math.random() * greetings.length)]
    );

    // Preload image
    useEffect(() => {
        const img = new Image();
        img.src = '/images/cartoon-avatar.webp';
        img.onload = () => setImageLoaded(true);
    }, []);

    // Don't render anything until image is loaded
    if (!imageLoaded) {
        return null;
    }

    return (
        <motion.div
            className="relative inline-block cursor-grab active:cursor-grabbing select-none"
            // Rocket animation from bottom
            initial={{ opacity: 0, y: 100, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 12,
                mass: 0.8
            }}
            // Drag & Snap
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            whileDrag={{ scale: 1.05 }}
            onMouseEnter={() => setShowBubble(true)}
            onMouseLeave={() => setShowBubble(false)}
        >
            {/* Speech Bubble */}
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={showBubble ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-lg whitespace-nowrap z-10 pointer-events-none"
            >
                <span className="text-sm font-medium text-gray-700">{currentGreeting}</span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
                <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200 -z-10" />
            </motion.div>

            {/* Avatar */}
            <div className="relative">
                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-full blur-2xl -z-10"
                    animate={{ scale: showBubble ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Main Image with Float */}
                <img
                    src="/images/cartoon-avatar.webp"
                    alt="Mahmoud's cartoon avatar"
                    className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-xl animate-float"
                    draggable={false}
                />
            </div>
        </motion.div>
    );
};

export default InteractiveAvatar;
