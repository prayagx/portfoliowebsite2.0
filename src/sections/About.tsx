import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Database Administrator & System Engineer",
        company: "Tata Consultancy Services (TCS)",
        period: "May 2024 - Present",
        description: "Managed Oracle 19c production databases with 99.9% uptime. Used AI tools (ChatGPT, Claude) for query tuning, log analysis, and troubleshooting. Optimized Exadata Cloud@Customer scripts and automated tasks with Shell and Ansible."
    },
    {
        role: "Software Development Intern",
        company: "Chowkhat Lifestyle",
        period: "Jul 2023 - Feb 2024",
        description: "Maintained Shopify-based eCommerce site. Customized Liquid templates, integrated APIs, and improved frontend with HTML5, Tailwind CSS, JavaScript, and RESTful APIs."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Pioneering the <span className="text-gradient">AI Frontier.</span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                        My engineering philosophy centers around hands-on, practical AI integration. Rather than treating AI as a buzzword, I actively apply Foundation Models (Claude, ChatGPT, Gemini) to solve complex backend optimization challenges, automate DevOps processes, and scaffold production-ready code. I bridge the gap between traditional robust data architecture and next-generation AI automation.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                        <Briefcase className="text-primary-500" /> Professional Experience
                    </h3>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surfaceBorder before:to-transparent">

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surfaceBorder bg-surface text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-primary-500/10 group-hover:border-primary-500/50">
                                    <Calendar size={16} />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 border-surfaceBorder hover:border-primary-500/30 transition-colors">
                                    <div className="flex flex-col mb-3">
                                        <span className="text-accent-500 text-sm font-mono mb-1">{exp.period}</span>
                                        <h4 className="text-xl font-bold text-text-primary">{exp.role}</h4>
                                        <span className="text-text-secondary font-medium">{exp.company}</span>
                                    </div>
                                    <p className="text-text-tertiary leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
