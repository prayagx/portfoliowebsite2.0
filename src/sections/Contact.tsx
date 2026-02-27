import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await res.json();

            if (res.status === 200) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Initialize <span className="text-gradient">Connection.</span>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Have a project in mind, a question about an AI implementation, or just want to connect? Send a prompt my way.
                    </p>
                </div>

                <div className="glass-card p-8 md:p-10 animate-fade-in-up">

                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                            <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
                                <CheckCircle className="text-primary-500" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent</h3>
                            <p className="text-text-secondary">
                                Thank you for reaching out. I'll process your input and get back to you shortly.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 px-6 py-2 rounded-full border border-surfaceBorder hover:bg-surfaceBorder/50 transition-colors"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* IMPORTANT: Web3Forms Access Key */}
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            {/* Optional: Add a subject line */}
                            <input type="hidden" name="subject" value="New Submission from Portfolio Website" />
                            {/* Optional: Honeypot to prevent spam */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="bg-background/50 border border-surfaceBorder rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="bg-background/50 border border-surfaceBorder rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message Payload</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="bg-background/50 border border-surfaceBorder rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                                    placeholder="How can we collaborate on..."
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                    <AlertCircle size={18} />
                                    <span className="text-sm">{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="mt-2 group relative px-6 py-3 rounded-lg bg-text-primary text-background font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                                        Transmitting...
                                    </span>
                                ) : (
                                    <>
                                        Send Payload
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                </div>

                <div className="mt-12 text-center text-text-tertiary text-sm max-w-lg mx-auto">
                    <p>
                        Note: This form uses <a href="https://web3forms.com/" target="_blank" rel="noreferrer" className="text-primary-500 hover:underline">Web3Forms</a> to securely transmit submissions directly to my email without requiring a backend database.
                    </p>
                </div>

            </div>
        </section>
    );
}
