import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-surfaceBorder bg-surface py-12 mt-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

                <div className="flex gap-6 mb-8">
                    <a href="https://github.com/prayagx" target="_blank" rel="noreferrer" className="p-3 bg-surfaceBorder/50 rounded-full text-text-secondary hover:text-primary-500 hover:bg-primary-500/10 transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/prayag-gupta" target="_blank" rel="noreferrer" className="p-3 bg-surfaceBorder/50 rounded-full text-text-secondary hover:accent-500 hover:bg-accent-500/10 transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:guptaprayag16@gmail.com" className="p-3 bg-surfaceBorder/50 rounded-full text-text-secondary hover:text-primary-500 hover:bg-primary-500/10 transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <p className="text-text-tertiary text-sm">
                    © {currentYear} Prayag Gupta. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
}
