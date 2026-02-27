import { ArrowUpRight, Code2, Cpu, LineChart } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const projects = [
    {
        title: "Harmony Dating App",
        category: "Full-Stack AI Application",
        icon: <Code2 className="text-primary-500 mb-6" size={32} />,
        description: "An innovative dating platform connecting users through Spotify listening data and intelligent compatibility algorithms. Features real-time PubNub messaging, voice intros, and collaborative playlists.",
        architecture: "React Native, Flask, Python, SQLite, Stripe API.",
        aiHighlight: "Built entirely using Cursor (AI Code Editor), demonstrating elite proficiency in prompt-driven system architecture and rapid prototyping.",
        link: "https://github.com/prayagx",
        tags: ["Cursor AI", "React Native", "Python", "Flask", "PubNub"]
    },
    {
        title: "MacroMind AI",
        category: "AI SaaS Front-End",
        icon: <Cpu className="text-accent-500 mb-6" size={32} />,
        description: "An AI-powered personalized nutrition platform providing tailored diet plans based on physical metrics and preferences. Features a modern glassmorphism UI, interactive multi-step wizard, and dark mode.",
        architecture: "TypeScript, React, Tailwind CSS.",
        aiHighlight: "Serves as proof of ability to build highly polished, user-facing AI tools and SaaS interfaces entirely with AI-assisted workflows (Cursor/Claude).",
        link: "https://macromindai.netlify.app/",
        tags: ["Cursor AI", "TypeScript", "Tailwind CSS", "React"]
    },
    {
        title: "Financial Fraud Detection",
        category: "Machine Learning Capstone",
        icon: <LineChart className="text-primary-500 mb-6" size={32} />,
        description: "University team lead for a machine learning project dedicated to detecting suspicious financial transactions. Handled end-to-end data wrangling, feature selection, and model tuning pipeline.",
        architecture: "Python, Scikit-Learn, Pandas.",
        aiHighlight: "Achieved 90%+ accuracy using Random Forest and Logistic Regression. Provides the mathematical and classical ML foundation vital for understanding modern LLMs.",
        link: "https://github.com/prayagx",
        tags: ["Python", "Supervised ML", "Random Forest", "Data Wrangling"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Recent <span className="text-gradient">Case Studies.</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl text-lg">
                            A curated selection of projects demonstrating my ability to build highly functional, polished systems using AI workflows and scalable technologies.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {projects.map((project, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx}>
                            <div className="glass-card flex flex-col group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary-500/10 hover:border-primary-500/40 transition-all duration-300 h-full">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-[100px] -z-10 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500"></div>

                                <div className="p-8 flex flex-col h-full z-10">
                                    <div className="group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] transition-all duration-300">
                                        {project.icon}
                                    </div>

                                    <span className="text-xs font-mono text-accent-500 uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-primary-500 transition-colors">{project.title}</h3>

                                    <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="bg-surfaceBorder/30 rounded-xl p-4 mb-6 border border-surfaceBorder/50 group-hover:border-primary-500/20 transition-colors">
                                        <p className="text-sm text-text-primary mb-2">
                                            <span className="font-semibold text-primary-500">Tech Stack:</span> {project.architecture}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            <span className="font-semibold text-accent-500">AI Narrative:</span> {project.aiHighlight}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-surfaceBorder/50 text-text-tertiary rounded-md text-xs font-medium border border-surfaceBorder group-hover:border-primary-500/20 group-hover:text-text-secondary transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-primary-500 transition-colors"
                                    >
                                        View live project / Code
                                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>

                                </div>
                            </div>
                        </FadeIn>
                    ))}

                </div>

            </div>
        </section>
    );
}
