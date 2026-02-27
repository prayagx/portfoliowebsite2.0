import { useEffect, useState } from 'react';
import { Terminal, ArrowRight, Download } from 'lucide-react';

const TYPE_SPEED = 50;

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const fullText = "Aspiring AI Engineer focused on backend optimization and AI-driven automation. I build scalable systems and intelligent applications.";

    useEffect(() => {
        let i = 0;
        setTypedText('');

        // Add a small delay before typing starts to simulate AI thought
        const timeout = setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (i < fullText.length) {
                    setTypedText(prev => prev + fullText.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, TYPE_SPEED);
            return () => clearInterval(typingInterval);
        }, 800);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surfaceBorder bg-surface/50 text-primary-500 text-sm font-medium mb-8 animate-fade-in-up">
                    <Terminal size={14} />
                    <span>System: Status Online</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Prayag Gupta
                </h1>

                <div className="h-24 md:h-16 mb-12 max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-text-secondary font-mono leading-relaxed">
                        <span className="text-accent-500 mr-2">{'>'}</span>
                        {typedText}
                        <span className="inline-block w-2 h-5 ml-1 bg-primary-500 animate-pulse"></span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#projects" className="group relative px-6 py-3 rounded-lg bg-text-primary text-background font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="/Prayag_Gupta_Resume_AWS_DB_AI.pdf" download className="px-6 py-3 rounded-lg border border-surfaceBorder bg-surface hover:bg-surfaceBorder/50 text-text-primary font-medium transition-colors flex items-center justify-center gap-2">
                        <Download size={18} className="text-text-secondary" />
                        Download CV
                    </a>
                </div>

            </div>
        </section>
    );
}
