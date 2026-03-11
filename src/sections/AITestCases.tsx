import { ArrowUpRight, BookOpen, Gamepad2, AppWindow, Crosshair } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const aiCases = [
    {
        title: "Neon Lies: Retro Murder Mystery",
        category: "Interactive Storytelling",
        icon: <Gamepad2 className="text-secondary-500 mb-6" size={32} />,
        image: "/neon_lies_demo.webp",
        description: "A fully functional retro-style murder mystery web game developed entirely through advanced prompt engineering. Built from scratch by decomposing narrative logic, dialogue trees, and state management into manageable AI prompts.",
        architecture: "Vanilla JS, HTML Canvas, AI (Claude/ChatGPT)",
        aiHighlight: "Demonstrates the ability to handle complex narrative logic generation, constraint management, and iterative debugging when directing LLMs to build functional interactive storytelling.",
        link: "https://neonlies.netlify.app/",
        tags: ["Prompt Engineering", "Dialogue Trees", "Vanilla JS", "Iterative Refinement"]
    },
    {
        title: "JLPT N5 Kanji Workbook",
        category: "Generative Content & Typesetting",
        icon: <BookOpen className="text-accent-500 mb-6" size={32} />,
        image: "/amazon_book_listing.webp",
        description: "A complete Japanese language learning workbook generated and professionally formatted using AI. Handled the end-to-end process from content generation to strict formatting constraints.",
        architecture: "LaTeX, AI (Claude/ChatGPT)",
        aiHighlight: "Proves strict syntax control over LLMs to output compile-ready LaTeX for complex formatting, including Furigana and structured layouts, avoiding hallucinated syntax.",
        link: "https://www.amazon.com/dp/B0GP771NRX",
        tags: ["Prompt Constraints", "LaTeX", "KDP Publishing", "Content Generation"]
    },
    {
        title: "The Browser Project",
        category: "Desktop Application",
        icon: <AppWindow className="text-secondary-500 mb-6" size={32} />,
        image: "/browser_project.png",
        description: "A modern desktop web browser built from the ground up using AI-driven development. Features a custom sidebar UI, workspace system, command palette, and auto-archiving temporary tabs, mimicking the functionality of next-generation browsers.",
        architecture: "Tauri, React, TypeScript, Tailwind CSS, Rust",
        aiHighlight: "Showcases the ability to architect and implement complex multi-language desktop applications, orchestrating standard web technologies alongside system-level bindings and custom UI components entirely through AI.",
        link: "https://github.com/prayagx/thebrowserproject",
        tags: ["Tauri", "React", "Desktop App", "System Architecture"]
    },
    {
        title: "Not Doom Guy",
        category: "Web-Based Gaming",
        icon: <Crosshair className="text-accent-500 mb-6" size={32} />,
        image: "/doom_clone.png",
        description: "A retro-style first-person shooter inspired by Doom, engineered fully through AI prompting and iterative refinement. Features classic raycasting mechanics, 3D environment rendering, and engaging gameplay elements running directly in the browser.",
        architecture: "Vanilla JS, HTML Canvas, AI (Claude/ChatGPT)",
        aiHighlight: "Demonstrates advanced prompting capabilities for game logic implementation, focusing on mathematical raycasting, performant rendering loops, and state management without relying on external game engines.",
        link: "https://notdoomguy.netlify.app/",
        tags: ["Game Dev", "Raycasting", "Vanilla JS", "Performance Optimization"]
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {aiCases.map((testCase, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx} className={idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"}>
                            <div className={`glass-card flex flex-col group relative overflow-hidden transition-all duration-300 h-full ${idx === 0 || idx === 3 ? 'bg-secondary-500/5 border-secondary-500/30' : ''} hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-secondary-500/20 hover:border-secondary-500/50`}>

                                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-500/10 rounded-bl-[150px] -z-10 group-hover:bg-secondary-500/20 group-hover:scale-110 transition-all duration-500 blur-2xl"></div>

                                {/* Media Placeholder */}
                                <div className="w-full h-48 sm:h-64 overflow-hidden border-b border-surfaceBorder/50 relative">
                                    <div className="absolute inset-0 bg-surface/80 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-color"></div>
                                    <img
                                        src={testCase.image}
                                        alt={testCase.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none"></div>
                                </div>

                                <div className="p-8 flex flex-col h-full z-10">
                                    <div className="group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.6)] transition-all duration-300 -mt-12 mb-4 bg-surface w-fit p-3 rounded-xl border border-surfaceBorder/50 relative z-20">
                                        {testCase.icon}
                                    </div>

                                    <span className="text-xs font-mono text-secondary-500 uppercase tracking-wider mb-2">{testCase.category}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary group-hover:text-secondary-500 transition-colors">{testCase.title}</h3>

                                    <p className="text-text-secondary mb-6 leading-relaxed flex-grow text-lg">
                                        {testCase.description}
                                    </p>

                                    <div className="bg-surfaceBorder/20 rounded-xl p-5 mb-6 border border-surfaceBorder/40 group-hover:border-secondary-500/30 transition-colors">
                                        <p className="text-sm text-text-primary mb-3">
                                            <span className="font-semibold text-secondary-500">Tech Stack:</span> {testCase.architecture}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            <span className="font-semibold text-accent-500">AI Prompting Challenge:</span> {testCase.aiHighlight}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {testCase.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-surfaceBorder/40 text-text-secondary rounded-md text-xs font-medium border border-surfaceBorder group-hover:border-secondary-500/30 group-hover:text-text-primary transition-colors">
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
