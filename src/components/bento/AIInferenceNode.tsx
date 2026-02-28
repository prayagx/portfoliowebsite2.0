import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export function AIInferenceNode() {
    const [status, setStatus] = useState('Standby');

    const handleSimulate = () => {
        if (status !== 'Standby') return;

        setStatus('Processing...');
        setTimeout(() => setStatus('Inference Complete. System Optimized.'), 1800);
        setTimeout(() => setStatus('Standby'), 4500);
    };

    return (
        <div className="glass-card p-6 h-full flex flex-col group relative overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute -top-10 -right-10 text-primary-500/5 group-hover:text-primary-500/10 transition-colors duration-500">
                <Sparkles size={140} />
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2 relative z-10">
                <Sparkles size={18} className="text-accent-500" />
                AI Inference Node
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed relative z-10 max-w-[80%]">
                Simulate generative model weighting for automated backend ops.
            </p>

            <div className="mt-auto relative z-10 pt-4">
                <div className="bg-background/80 border border-surfaceBorder rounded-lg p-3 text-xs font-mono text-primary-500 mb-4 flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${status === 'Processing...' ? 'bg-accent-500 animate-pulse' : 'bg-primary-500'}`}></div>
                    {status}
                </div>

                <button
                    onClick={handleSimulate}
                    disabled={status !== 'Standby'}
                    className="w-full flex items-center justify-center gap-2 bg-text-primary hover:bg-gray-200 text-background font-medium px-4 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Run Inference <Send size={14} />
                </button>
            </div>
        </div>
    );
}
