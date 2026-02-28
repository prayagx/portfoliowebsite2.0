import { useState, useEffect } from 'react';

export function LiveServerTerminal() {
    const [logs, setLogs] = useState<string[]>([]);
    const [logIndex, setLogIndex] = useState(0);

    const mockLogs = [
        "[SYS] Initializing Oracle19c connection pool... [OK]",
        "[DB] Executing performance optimization scripts...",
        "[DB] Query execution time reduced by 40.2%",
        "[AWS] Auto-scaling EC2 instances for high traffic... [OK]",
        "[SEC] IAM roles verified. Zero trust architecture active.",
        "[AI] Loading Claude API weights... connection established.",
        "[AI] Analyzing logs for anomaly detection...",
        "[SYS] Uptime: 99.99%. All systems nominal."
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
        <div className="glass-card p-4 relative overflow-hidden flex flex-col font-mono text-xs sm:text-sm h-full group">
            <h3 className="text-text-primary mb-2 flex items-center gap-2 border-b border-surfaceBorder pb-2">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                live_server_log.sh
            </h3>
            <div className="flex-1 overflow-hidden relative mt-2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/80 z-10 pointer-events-none" />
                <div className="space-y-1.5 text-text-secondary opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end h-full">
                    {logs.map((log, i) => (
                        <p key={i} className="animate-fade-in-up">
                            <span className="text-primary-500">{'>'}</span> {log}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
