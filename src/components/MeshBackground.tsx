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
            {/* Subtle Noise Texture overlay */}
            <div
                className="absolute inset-0 z-50 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Lush Mesh Fluid Gradients */}
            {/* Top Left Teal Blob */}
            <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary-500/30 rounded-full blur-[100px] mix-blend-screen animate-blob" />
            {/* Top Right Royal Blue Blob */}
            <div className="absolute top-0 -right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
            {/* Bottom Indigo Blob */}
            <div className="absolute -bottom-20 left-20 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />

            {/* Dynamic Mouse Glow Overlay */}
            <div
                className="absolute inset-0 z-10 transition-opacity duration-300 mix-blend-screen"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.08), transparent 80%)`,
                }}
            />
        </div>
    );
};
