import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovered element is a link, button, or has a specific class
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Disable on mobile/touch screens
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
            animate={{
                x: mousePosition.x - (isHovering ? 24 : 16),
                y: mousePosition.y - (isHovering ? 24 : 16),
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        >
            <motion.div
                className={`rounded-full shadow-[0_0_20px_rgba(20,184,166,0.9)] ${isHovering
                        ? 'bg-transparent border-2 border-primary-500 shadow-[0_0_25px_rgba(20,184,166,1)] flex items-center justify-center'
                        : 'bg-primary-500'
                    }`}
                animate={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    opacity: 1, // Never transparent
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            >
                {/* Inner dot when hovering */}
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-2 h-2 rounded-full bg-primary-500"
                    />
                )}
            </motion.div>
        </motion.div>
    );
};
