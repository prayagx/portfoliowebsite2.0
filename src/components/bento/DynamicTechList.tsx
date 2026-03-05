import { Server, Database, Brain, Code2, Cpu, Cloud, GitBranch, Terminal } from 'lucide-react';

const technologies = [
    { name: "React / Typescript", icon: <Code2 size={24} className="text-accent-500" />, level: "Advanced" },
    { name: "LLMs (Claude, GPT)", icon: <Brain size={24} className="text-secondary-500" />, level: "Expert" },
    { name: "Oracle Exadata 19c", icon: <Database size={24} className="text-primary-500" />, level: "Expert" },
    { name: "Vector Databases", icon: <Server size={24} className="text-accent-500" />, level: "Intermediate" },
    { name: "Python / Shell Scripting", icon: <Terminal size={24} className="text-text-secondary" />, level: "Advanced" },
    { name: "Cloud & DevOps (OCI)", icon: <Cloud size={24} className="text-primary-500" />, level: "Advanced" },
    { name: "Machine Learning Concepts", icon: <Cpu size={24} className="text-secondary-500" />, level: "Intermediate" },
    { name: "CI/CD & Git", icon: <GitBranch size={24} className="text-text-secondary" />, level: "Advanced" },
];

export function DynamicTechList() {
    return (
        <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden group">
            {/* Subtle mesh background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="flex items-center justify-between mb-6 z-10 border-b border-surfaceBorder/50 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <h3 className="text-xl font-bold font-mono tracking-tight text-text-primary">TECH_STACK</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-2 scrollbar-hide z-10">
                {technologies.map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg border border-surfaceBorder/30 bg-surface/50 hover:bg-surfaceBorder/10 hover:-translate-y-1 transition-all duration-300 group/tech cursor-crosshair"
                    >
                        <div className="p-2 rounded-md bg-background shadow-inner border border-surfaceBorder/20 group-hover/tech:shadow-[0_0_10px_rgba(99,102,241,0.15)] transition-shadow">
                            {tech.icon}
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-text-primary group-hover/tech:text-primary-600 transition-colors">{tech.name}</p>
                            <p className="text-[10px] uppercase font-mono tracking-wider text-text-tertiary">{tech.level}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Overlay gradient to fade out bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-surface to-transparent rounded-b-2xl z-20 pointer-events-none"></div>
        </div>
    );
}
