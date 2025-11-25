import { useEffect, useRef, useState } from 'react';

const AbstractBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsLight(document.body.classList.contains('light'));
        };

        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Node class for network visualization
        class Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            hue: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1.5;
                this.hue = Math.random() * 40 + 200; // Blue-purple range
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                this.x = Math.max(0, Math.min(canvas.width, this.x));
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }

            draw(isLightTheme: boolean) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                const opacity = isLightTheme ? 0.6 : 0.9;
                const lightness = isLightTheme ? 45 : 65;
                ctx.fillStyle = `hsla(${this.hue}, 80%, ${lightness}%, ${opacity})`;
                ctx.fill();

                // Glow effect
                ctx.shadowBlur = isLightTheme ? 6 : 8;
                ctx.shadowColor = `hsla(${this.hue}, 80%, ${lightness}%, ${isLightTheme ? 0.3 : 0.5})`;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Create nodes
        const nodes: Node[] = [];
        const nodeCount = 100;
        const connectionDistance = 120;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new Node());
        }

        // Draw connections
        const drawConnections = (isLightTheme: boolean) => {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const baseOpacity = isLightTheme ? 0.25 : 0.4;
                        const opacity = (1 - distance / connectionDistance) * baseOpacity;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);

                        const gradient = ctx.createLinearGradient(
                            nodes[i].x, nodes[i].y,
                            nodes[j].x, nodes[j].y
                        );
                        const lightness = isLightTheme ? 45 : 65;
                        gradient.addColorStop(0, `hsla(210, 80%, ${lightness}%, ${opacity})`);
                        gradient.addColorStop(1, `hsla(250, 80%, ${lightness}%, ${opacity})`);

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        let animationId: number;
        const animate = () => {
            // Fade effect for trails
            const fadeOpacity = isLight ? 0.12 : 0.08;
            const fadeColor = isLight ? `rgba(255, 255, 255, ${fadeOpacity})` : `rgba(0, 0, 0, ${fadeOpacity})`;
            ctx.fillStyle = fadeColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw connections first
            drawConnections(isLight);

            // Update and draw nodes
            nodes.forEach(node => {
                node.update();
                node.draw(isLight);
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [isLight]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: isLight ? 0.6 : 0.5 }}
        />
    );
};

export default AbstractBackground;
