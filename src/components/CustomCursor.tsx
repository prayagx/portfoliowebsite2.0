import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Perfect nested child detection on every tick
            const target = e.target as HTMLElement;
            if (target && typeof target.closest === 'function') {
                const isHoverable = target.closest('button') || target.closest('a') || target.closest('[role="button"]') || target.closest('.magnetic-btn');
                setIsHovering(!!isHoverable);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center"
            animate={{
                x: mousePosition.x - (isHovering ? 20 : 6),
                y: mousePosition.y - (isHovering ? 20 : 10),
            }}
            transition={{
                type: 'tween',
                ease: 'backOut',
                duration: 0.1
            }}
        >
            <motion.div
                className={`flex items-center justify-between shadow-[0_0_20px_rgba(20,184,166,0.5)] ${!isHovering ? 'animate-cursor-blink' : ''}`}
                initial={false}
                animate={{
                    width: isHovering ? 46 : 12,
                    height: isHovering ? 46 : 20,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            >
                {/* Left Side (Expands to full block when idle, shrinks to bracket on hover) */}
                <motion.div
                    className="bg-primary-500 h-full rounded-[2px]"
                    initial={false}
                    animate={{ width: isHovering ? 3 : 12 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                />

                {/* Right Side (Shrinks to 0 width when idle, expands to bracket on hover) */}
                <motion.div
                    className="bg-primary-500 h-full rounded-[2px]"
                    initial={false}
                    animate={{ width: isHovering ? 3 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                />
            </motion.div>
        </motion.div>
    );
};
