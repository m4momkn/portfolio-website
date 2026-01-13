import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorAnimationProps {
    targetRef: React.RefObject<HTMLElement>;
}

const CursorAnimation = ({ targetRef }: CursorAnimationProps) => {
    const [showCursor, setShowCursor] = useState(false);
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        // Check if animation has run in this session
        const hasRun = sessionStorage.getItem('cursorAnimationRun');
        if (hasRun) return;

        // Delay to let layout stabilize
        const timer = setTimeout(() => {
            if (targetRef.current) {
                const rect = targetRef.current.getBoundingClientRect();
                setTargetPos({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    width: rect.width + 20, // Padding
                    height: rect.height + 10
                });
                setShowCursor(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [targetRef]);

    const handleAnimationComplete = () => {
        sessionStorage.setItem('cursorAnimationRun', 'true');
        setTimeout(() => setShowCursor(false), 1000);
    };

    return (
        <AnimatePresence>
            {showCursor && (
                <>
                    {/* Cursor */}
                    <motion.div
                        initial={{ x: window.innerWidth / 2, y: window.innerHeight / 2, opacity: 0 }}
                        animate={{
                            x: targetPos.x,
                            y: targetPos.y + 20, // Offset slightly below center
                            opacity: 1
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="fixed z-50 pointer-events-none"
                        onAnimationComplete={() => {
                            // Trigger highlight after cursor arrives
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="black" stroke="white" strokeWidth="2" />
                        </svg>
                    </motion.div>

                    {/* Highlight Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5, duration: 0.3 }}
                        className="fixed z-40 border-2 border-accent rounded-lg pointer-events-none bg-accent/10"
                        style={{
                            left: targetPos.x - targetPos.width / 2,
                            top: targetPos.y - targetPos.height / 2,
                            width: targetPos.width,
                            height: targetPos.height,
                        }}
                        onAnimationComplete={handleAnimationComplete}
                    />
                </>
            )}
        </AnimatePresence>
    );
};

export default CursorAnimation;
