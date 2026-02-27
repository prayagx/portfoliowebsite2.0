import { useEffect, useState } from 'react';
import { Terminal, ArrowRight, Download } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { MagneticButton } from '../components/MagneticButton';

const TYPE_SPEED = 50;

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const fullText = "AI Engineer focused on backend optimization and AI-driven automation. I build scalable systems and intelligent applications.";

    useEffect(() => {
        let i = 0;
        setTypedText('');

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
            <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">

                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surfaceBorder bg-surface/50 text-primary-500 text-sm font-medium mb-8 shadow-lg shadow-primary-500/5">
                        <Terminal size={14} />
                        <span>System: Status Online</span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Prayag Gupta
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="h-28 md:h-16 mb-12 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-text-secondary font-mono leading-relaxed">
                            <span className="text-accent-500 mr-2">{'>'}</span>
                            {typedText}
                            <span className="inline-block w-2 h-5 ml-1 bg-primary-500 animate-pulse-slow"></span>
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <MagneticButton>
                            <a href="#projects" className="group relative px-6 py-3 rounded-lg bg-text-primary text-background font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-white/5">
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a href="/Prayag_Gupta_Resume.pdf" download className="group px-6 py-3 rounded-lg border border-surfaceBorder bg-surface hover:border-primary-500/50 hover:bg-surfaceBorder/30 text-text-primary font-medium transition-colors flex items-center justify-center gap-2">
                                <Download size={18} className="text-text-secondary group-hover:text-primary-500 transition-colors" />
                                Download CV
                            </a>
                        </MagneticButton>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
