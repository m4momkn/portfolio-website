import { useEffect, useRef, useState } from 'react';

const StarryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isReady, setIsReady] = useState(false);

    // Defer initialization until after first paint
    useEffect(() => {
        const timerId = setTimeout(() => setIsReady(true), 1000);
        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        if (!isReady) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.height || 0);
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 0.5 + 0.1;
                const blueShade = Math.floor(Math.random() * 50) + 200;
                this.color = `rgba(59, 130, ${blueShade}, ${Math.random() * 0.3 + 0.1})`;
            }

            update() {
                this.y += this.speedY;
                if (this.y > (canvas?.height || 0)) {
                    this.y = 0 - this.size;
                    this.x = Math.random() * (canvas?.width || 0);
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isReady]);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
            {isReady && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />}
        </div>
    );
};

export default StarryBackground;
