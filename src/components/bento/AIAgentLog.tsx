import { useState, useEffect } from 'react';
import { Bot, Terminal } from 'lucide-react';

export function AIAgentLog() {
    const [logs, setLogs] = useState<string[]>([]);
    const [logIndex, setLogIndex] = useState(0);

    const mockLogs = [
        "[PLANNING] Analyzing system requirements...",
        "[REASONING] Selecting optimal architecture pattern...",
        "[ACTION] Generating React component structure...",
        "[VERIFY] Running ast-grep tests on syntax tree...",
        "[SUCCESS] Test passed. 0 errors found.",
        "[PLANNING] Optimizing for mobile responsiveness...",
        "[ACTION] Injecting Tailwind utility classes...",
        "[SYSTEM] Agent iteration cycle complete."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLogIndex((prev) => (prev + 1) % mockLogs.length);
        }, 2200);
        return () => clearInterval(interval);
    }, [mockLogs.length]);

    useEffect(() => {
        if (logs.length > 4) {
            setLogs((prevLogs) => [...prevLogs.slice(1), mockLogs[logIndex]]);
        } else {
            setLogs((prevLogs) => [...prevLogs, mockLogs[logIndex]]);
        }
    }, [logIndex]);

    return (
        <div className="glass-card p-5 relative overflow-hidden flex flex-col font-mono text-xs sm:text-sm h-full group">

            <h3 className="text-text-primary mb-3 flex items-center justify-between border-b border-surfaceBorder pb-3">
                <div className="flex items-center gap-2">
                    <Bot size={16} className="text-secondary-500" />
                    <span className="font-semibold tracking-wide">AI_AGENT_RUNTIME</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-500/10 border border-secondary-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 animate-pulse"></span>
                    <span className="text-[10px] text-secondary-500 uppercase">Active</span>
                </div>
            </h3>

            <div className="flex-1 overflow-hidden relative mt-1">
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

                <div className="space-y-2 text-text-secondary opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end h-full py-2">
                    {logs.map((log, i) => {
                        const isAction = log.includes("[ACTION]");
                        const isPlan = log.includes("[PLANNING]") || log.includes("[REASONING]");
                        const isSuccess = log.includes("[SUCCESS]");

                        let colorClass = "text-text-secondary";
                        if (isAction) colorClass = "text-primary-500";
                        if (isPlan) colorClass = "text-accent-500";
                        if (isSuccess) colorClass = "text-green-400";

                        return (
                            <p key={i} className={`animate-fade-in-up flex items-start gap-2 ${colorClass}`}>
                                <Terminal size={12} className="mt-0.5 shrink-0 opacity-50" />
                                <span>{log}</span>
                            </p>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}

