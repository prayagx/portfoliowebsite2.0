import { FadeIn } from '../components/FadeIn';
import { LiveServerTerminal } from '../components/bento/LiveServerTerminal';
import { TechOrbit } from '../components/bento/TechOrbit';
import { DataMetrics } from '../components/bento/DataMetrics';
import { AIInferenceNode } from '../components/bento/AIInferenceNode';

export default function Dashboard() {
    return (
        <section id="dashboard" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            System <span className="text-gradient">Dashboard.</span>
                        </h2>
                        <p className="text-text-secondary">Real-time metrics and core architecture overview.</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[500px]">
                    {/* Top Left: Terminal (Span 2 cols) */}
                    <div className="md:col-span-2 md:row-span-1 h-64 md:h-auto">
                        <FadeIn delay={0.1} className="h-full">
                            <LiveServerTerminal />
                        </FadeIn>
                    </div>

                    {/* Right column: Tech Orbit (Span 2 rows) */}
                    <div className="md:col-span-1 md:row-span-2 h-[400px] md:h-auto">
                        <FadeIn delay={0.2} className="h-full">
                            <TechOrbit />
                        </FadeIn>
                    </div>

                    {/* Bottom Left: Data Metrics */}
                    <div className="md:col-span-1 md:row-span-1 h-64 md:h-auto">
                        <FadeIn delay={0.3} className="h-full">
                            <DataMetrics />
                        </FadeIn>
                    </div>

                    {/* Bottom Middle: AI Node */}
                    <div className="md:col-span-1 md:row-span-1 h-64 md:h-auto">
                        <FadeIn delay={0.4} className="h-full">
                            <AIInferenceNode />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
