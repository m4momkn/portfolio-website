import { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const Typewriter = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
}: TypewriterProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0);
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

    const safeIndex = index < words.length ? index : 0;

    return (
        <span className="inline-block">
            {words[safeIndex].substring(0, subIndex)}
            <span className="ml-1 inline-block w-0.5 h-4 bg-accent align-middle animate-cursor-blink"></span>
        </span>
    );
};

export default Typewriter;
