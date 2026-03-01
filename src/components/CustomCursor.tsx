import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [hoverState, setHoverState] = useState({ active: false, width: 0, height: 0, x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Perfect nested child detection on every tick
            const target = e.target as HTMLElement;
            if (target && typeof target.closest === 'function') {
                const hoverableElement = target.closest('button') || target.closest('a') || target.closest('[role="button"]') || target.closest('.magnetic-btn');

                if (hoverableElement) {
                    const rect = hoverableElement.getBoundingClientRect();
                    setHoverState({
                        active: true,
                        width: rect.width,
                        height: rect.height,
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2
                    });
                } else {
                    setHoverState(prev => prev.active ? { ...prev, active: false } : prev);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Add scroll listener so cursor follows elements when scrolling
        const handleScroll = () => {
            // We could update the rect here, but mousemove will catch it on next move.
            // Clearing hover state on scroll is simpler and standard to avoid detached cursors
            setHoverState(prev => prev.active ? { ...prev, active: false } : prev);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    const PADDING = 16; // 8px padding on each side for the brackets to frame the button

    return (
        <motion.div
            className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center cursor-none"
            animate={{
                x: hoverState.active ? hoverState.x - (hoverState.width / 2) - (PADDING / 2) : mousePosition.x - 6,
                y: hoverState.active ? hoverState.y - (hoverState.height / 2) - (PADDING / 2) : mousePosition.y - 10,
            }}
            transition={{
                type: 'tween',
                ease: 'backOut',
                duration: hoverState.active ? 0.2 : 0.05
            }}
        >
            <motion.div
                className={`flex items-center justify-between shadow-[0_0_20px_rgba(20,184,166,0.5)] ${!hoverState.active ? 'animate-cursor-blink' : ''}`}
                initial={false}
                animate={{
                    width: hoverState.active ? hoverState.width + PADDING : 12,
                    height: hoverState.active ? hoverState.height + PADDING : 20,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            >
                {/* Left Side (Expands to full block when idle, shrinks to bracket on hover) */}
                <motion.div
                    className="bg-primary-500 h-full rounded-[2px]"
                    initial={false}
                    animate={{ width: hoverState.active ? 3 : 12 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                />

                {/* Right Side (Shrinks to 0 width when idle, expands to bracket on hover) */}
                <motion.div
                    className="bg-primary-500 h-full rounded-[2px]"
                    initial={false}
                    animate={{ width: hoverState.active ? 3 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                />
            </motion.div>
        </motion.div>
    );
};
