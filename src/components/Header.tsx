import { useState } from 'react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState('home');

    return (
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 animate-fade-in-up">
            <nav className="glass-card px-1 py-1 sm:px-2 sm:py-2 flex items-center gap-0.5 sm:gap-1 rounded-full border-white/10 dark:border-white/5 mx-auto max-w-full overflow-x-auto scrollbar-hide">

                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveSection(item.name.toLowerCase())}
                        className={`
              relative px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
              ${activeSection === item.name.toLowerCase()
                                ? 'text-text-primary bg-surfaceBorder'
                                : 'text-text-secondary hover:text-text-primary hover:bg-surfaceBorder/50'}
            `}
                    >
                        {item.name}
                    </a>
                ))}

                <div className="w-px h-4 sm:h-6 bg-surfaceBorder mx-1 sm:mx-2 flex-shrink-0"></div>

                <a
                    href="#contact"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-medium rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-all duration-300 whitespace-nowrap flex-shrink-0"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
