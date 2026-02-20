import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedY: number;
    color: string;
}

function createParticle(canvasWidth: number, canvasHeight: number): Particle {
    const blueShade = Math.floor(Math.random() * 50) + 200;
    return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.5 + 0.1,
        color: `rgba(59, 130, ${blueShade}, ${Math.random() * 0.3 + 0.1})`,
    };
}

function updateParticle(particle: Particle, canvasWidth: number, canvasHeight: number): void {
    particle.y += particle.speedY;
    if (particle.y > canvasHeight) {
        particle.y = 0 - particle.size;
        particle.x = Math.random() * canvasWidth;
    }
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle): void {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
}

const StarryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isReady, setIsReady] = useState(false);

    // Defer initialization until after first paint
    useEffect(() => {
        const timerId = setTimeout(() => setIsReady(true), 1000);
        return () => clearTimeout(timerId);
    }, []);

    const initParticles = useCallback((width: number, height: number): Particle[] => {
        const count = Math.floor((width * height) / 15000);
        const particles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            particles.push(createParticle(width, height));
        }
        return particles;
    }, []);

    useEffect(() => {
        if (!isReady) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let resizeTimer: ReturnType<typeof setTimeout>;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = initParticles(canvas.width, canvas.height);
        };

        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeCanvas, 150);
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const particle of particles) {
                updateParticle(particle, canvas.width, canvas.height);
                drawParticle(ctx, particle);
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isReady, initParticles]);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
            {isReady && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />}
        </div>
    );
};

export default StarryBackground;
