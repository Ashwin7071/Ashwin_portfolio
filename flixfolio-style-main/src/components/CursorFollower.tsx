import { useEffect, useState } from "react";

export const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", updateCursor);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed pointer-events-none z-50 mix-blend-screen transition-transform duration-100 ease-out"
            style={{
                left: 0,
                top: 0,
                transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
            }}
        >
            <div className="w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        </div>
    );
};
