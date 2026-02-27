import { BrainCircuit, Database, Code, Terminal, Server, Cpu } from 'lucide-react';

const skillCategories = [
    {
        title: "AI & Automation",
        icon: <BrainCircuit className="text-primary-500 mb-4" size={32} />,
        skills: ["Claude API", "ChatGPT", "Gemini", "Hugging Face", "Prompt Engineering", "AI-Assisted Dev (Cursor)"]
    },
    {
        title: "Data Engine",
        icon: <Database className="text-accent-500 mb-4" size={32} />,
        skills: ["Oracle DB 19c", "SQL", "PL/SQL", "Supervised Learning", "Data Wrangling", "Performance Tuning"]
    },
    {
        title: "Core Infrastructure",
        icon: <Server className="text-primary-500 mb-4" size={32} />,
        skills: ["AWS (EC2, S3, IAM)", "Linux (RHEL) / UNIX", "Shell Scripting", "Bash", "Ansible", "CI/CD"]
    },
    {
        title: "Full-Stack Build",
        icon: <Code className="text-accent-500 mb-4" size={32} />,
        skills: ["Python", "TypeScript", "JavaScript", "React / React Native", "Tailwind CSS", "HTML5/CSS3"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-surface/30">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal.</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A specialized toolkit combining robust database management, modern cloud infrastructure, and cutting-edge artificial intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="bg-background/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-surfaceBorder group-hover:border-primary-500/50 transition-colors">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-6 text-text-primary">{category.title}</h3>

                            <ul className="space-y-3 mt-auto">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-500 transition-colors"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
