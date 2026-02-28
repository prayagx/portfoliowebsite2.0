export function DataMetrics() {
    return (
        <div className="glass-card p-6 h-full flex flex-col justify-between group">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-500 transition-colors">Production Metrics</h3>
            <div className="flex items-center justify-around mt-4">

                {/* SVG Progress Ring */}
                <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-surfaceBorder" />
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="0.25" className="text-primary-500 animate-[dash_1.5s_ease-out_forwards]" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-xl font-bold text-text-primary">99.9%</span>
                        <span className="text-[10px] text-text-secondary uppercase tracking-wider">Uptime</span>
                    </div>
                </div>

                {/* Stat Blocks */}
                <div className="flex flex-col gap-3">
                    <div className="bg-surface/50 border border-surfaceBorder rounded-lg p-2.5 text-center group-hover:border-accent-500/30 transition-colors">
                        <span className="block text-accent-500 font-bold text-lg">500M+</span>
                        <span className="text-[10px] text-text-secondary uppercase tracking-widest">Rows</span>
                    </div>
                    <div className="bg-surface/50 border border-surfaceBorder rounded-lg p-2.5 text-center group-hover:border-primary-500/30 transition-colors">
                        <span className="block text-primary-500 font-bold text-lg">-40%</span>
                        <span className="text-[10px] text-text-secondary uppercase tracking-widest">Latency</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
