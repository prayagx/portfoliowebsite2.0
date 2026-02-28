import { Database, Server, Code, Bot } from 'lucide-react';

export function TechOrbit() {
    return (
        <div className="glass-card p-6 min-h-[300px] h-full flex flex-col justify-center items-center relative overflow-hidden group">
            <h3 className="absolute top-6 left-6 text-xl font-bold text-text-primary group-hover:text-primary-500 transition-colors">Core Stack</h3>

            <div className="relative w-48 h-48 flex items-center justify-center mt-8">
                {/* Center Node */}
                <div className="w-14 h-14 bg-surface border border-primary-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.3)] z-10 group-hover:border-primary-500 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-500">
                    <span className="font-bold text-primary-500 tracking-wider">PG</span>
                </div>

                {/* Inner Orbit */}
                <div className="absolute inset-2 border border-surfaceBorder rounded-full animate-[spin_12s_linear_infinite]" />
                <div className="absolute inset-2 animate-[spin_12s_linear_infinite]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-surfaceBorder flex items-center justify-center text-accent-500 transform -rotate-0 animate-[spin_12s_linear_infinite_reverse] shadow-lg">
                        <Database size={14} />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-surfaceBorder flex items-center justify-center text-primary-500 transform -rotate-180 animate-[spin_12s_linear_infinite_reverse] shadow-lg">
                        <Server size={14} />
                    </div>
                </div>

                {/* Outer Orbit */}
                <div className="absolute inset-[-15%] border border-surfaceBorder/50 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-[-15%] animate-[spin_20s_linear_infinite_reverse]">
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border-2 border-surfaceBorder flex items-center justify-center text-purple-500 transform rotate-90 animate-[spin_20s_linear_infinite] shadow-lg">
                        <Code size={18} />
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border-2 border-surfaceBorder flex items-center justify-center text-yellow-500 transform -rotate-90 animate-[spin_20s_linear_infinite] shadow-lg">
                        <Bot size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}
