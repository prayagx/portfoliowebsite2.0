import { FadeIn } from '../components/FadeIn';
import { AIAgentLog } from '../components/bento/AIAgentLog';
import { TechOrbit } from '../components/bento/TechOrbit';
import { DataMetrics } from '../components/bento/DataMetrics';
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

                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:h-[520px]">
                    {/* Top Left: Terminal/Agent (Span 8 cols) */}
                    <div className="md:col-span-8 md:row-span-1 h-72 md:h-auto">
                        <FadeIn delay={0.1} className="h-full">
                            <AIAgentLog />
                        </FadeIn>
                    </div>

                    {/* Right column: Tech Orbit (Span 4 cols, 2 rows) */}
                    <div className="md:col-span-4 md:row-span-2 h-[450px] md:h-auto">
                        <FadeIn delay={0.2} className="h-full">
                            <TechOrbit />
                        </FadeIn>
                    </div>

                    {/* Bottom Right: Data Metrics (Span 8 cols) */}
                    <div className="md:col-span-8 md:row-span-1 h-64 md:h-auto">
                        <FadeIn delay={0.3} className="h-full">
                            <DataMetrics />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
