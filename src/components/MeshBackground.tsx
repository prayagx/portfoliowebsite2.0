import { useEffect, useState } from 'react';

export const MeshBackground = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none">
            {/* Grid Pattern overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.5]"
                style={{
                    backgroundImage: `radial-gradient(var(--color-surfaceBorder) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Subtle Noise Texture overlay */}
            <div
                className="absolute inset-0 z-50 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Lush Mesh Fluid Gradients */}
            {/* Top Left Blob */}
            <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary-500/15 rounded-full blur-[100px] mix-blend-multiply animate-blob" />
            {/* Top Right Blob */}
            <div className="absolute top-0 -right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
            {/* Bottom Blob */}
            <div className="absolute -bottom-20 left-20 w-[30rem] h-[30rem] bg-secondary-500/10 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />

            {/* Dynamic Mouse Glow Overlay */}
            <div
                className="absolute inset-0 z-10 transition-opacity duration-300 mix-blend-color-burn"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(79, 70, 229, 0.05), transparent 80%)`,
                }}
            />
        </div>
    );
};
