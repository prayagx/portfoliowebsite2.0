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
                x: mousePosition.x - (isHovering ? 20 : 6),
                y: mousePosition.y - (isHovering ? 20 : 10),
            }}
            transition={{
                type: 'spring',
                stiffness: 150, // Slightly snappy follow
                damping: 15,
                mass: 0.1
            }}
        >
            <motion.div
                className={`flex items-center justify-between shadow-[0_0_20px_rgba(20,184,166,0.9)] ${!isHovering ? 'animate-cursor-blink' : ''}`}
                animate={{
                    width: isHovering ? 40 : 12,
                    height: isHovering ? 40 : 20,
                    backgroundColor: isHovering ? 'transparent' : '#14b8a6', // primary-500
                    borderRadius: isHovering ? '4px' : '2px',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            >
                {/* Left Bracket Line */}
                <motion.div
                    className="h-full bg-primary-500 rounded-sm shadow-[0_0_15px_rgba(20,184,166,1)]"
                    animate={{ width: isHovering ? 4 : 0, opacity: isHovering ? 1 : 0 }}
                />

                {/* Right Bracket Line */}
                <motion.div
                    className="h-full bg-primary-500 rounded-sm shadow-[0_0_15px_rgba(20,184,166,1)]"
                    animate={{ width: isHovering ? 4 : 0, opacity: isHovering ? 1 : 0 }}
                />
            </motion.div>
        </motion.div>
    );
};
