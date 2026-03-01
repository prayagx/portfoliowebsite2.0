import { ArrowUpRight, BookOpen, Gamepad2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const aiCases = [
    {
        title: "Neon Lies: Retro Web Game",
        category: "Interactive Simulation",
        icon: <Gamepad2 className="text-secondary-500 mb-6" size={32} />,
        description: "A fully functional retro-style web game developed entirely through advanced prompt engineering. Built from scratch by decomposing game mechanics (physics loop, collision detection, state management) into manageable AI prompts.",
        architecture: "Vanilla JS, HTML Canvas, AI (Claude/ChatGPT)",
        aiHighlight: "Demonstrates the ability to handle complex logic generation, constraint management, and iterative debugging when directing LLMs to build functional software architecture.",
        link: "https://neonlies.netlify.app/",
        tags: ["Prompt Engineering", "Game Loop", "Vanilla JS", "Iterative Refinement"]
    },
    {
        title: "JLPT N5 Kanji Workbook",
        category: "Generative Content & Typesetting",
        icon: <BookOpen className="text-accent-500 mb-6" size={32} />,
        description: "A complete Japanese language learning workbook generated and professionally formatted using AI. Handled the end-to-end process from content generation to strict formatting constraints.",
        architecture: "LaTeX, AI (Claude/ChatGPT)",
        aiHighlight: "Proves strict syntax control over LLMs to output compile-ready LaTeX for complex formatting, including Furigana and structured layouts, avoiding hallucinated syntax.",
        link: "https://www.amazon.com/dp/B0GP771NRX",
        tags: ["Prompt Constraints", "LaTeX", "KDP Publishing", "Content Generation"]
    }
];

export default function AITestCases() {
    return (
        <section id="ai-testcases" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            AI <span className="text-secondary-500">Test Cases.</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl text-lg">
                            Demonstrating practical prompt engineering through complex problem decomposition, strict syntax constraint handling, and iterative implementation.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {aiCases.map((testCase, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx}>
                            <div className="glass-card flex flex-col group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-secondary-500/10 hover:border-secondary-500/40 transition-all duration-300 h-full">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/5 rounded-bl-[100px] -z-10 group-hover:bg-secondary-500/10 group-hover:scale-110 transition-all duration-500"></div>

                                <div className="p-8 flex flex-col h-full z-10">
                                    <div className="group-hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] transition-all duration-300">
                                        {testCase.icon}
                                    </div>

                                    <span className="text-xs font-mono text-accent-500 uppercase tracking-wider mb-2">{testCase.category}</span>
                                    <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-secondary-500 transition-colors">{testCase.title}</h3>

                                    <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                                        {testCase.description}
                                    </p>

                                    <div className="bg-surfaceBorder/30 rounded-xl p-4 mb-6 border border-surfaceBorder/50 group-hover:border-secondary-500/20 transition-colors">
                                        <p className="text-sm text-text-primary mb-2">
                                            <span className="font-semibold text-secondary-500">Tech Stack:</span> {testCase.architecture}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            <span className="font-semibold text-accent-500">AI Prompting Challenge:</span> {testCase.aiHighlight}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {testCase.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-surfaceBorder/50 text-text-tertiary rounded-md text-xs font-medium border border-surfaceBorder group-hover:border-secondary-500/20 group-hover:text-text-secondary transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={testCase.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-secondary-500 transition-colors"
                                    >
                                        View Live Delivery
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
