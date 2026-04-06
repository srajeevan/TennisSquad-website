import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { Mail, MessageCircle, HelpCircle } from "lucide-react"

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default function Support() {
    return (
        <div className="flex flex-col">
            <section className="pt-28 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

                <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeIn className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Support</span>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">How Can We Help?</h1>
                        <p className="text-lg text-text-muted">
                            We're here to make sure you have the best experience with TennisSquad.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-5">
                        <FadeIn delay={0}>
                            <a
                                href="mailto:support@tennissquad.app"
                                className="block p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center group"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Email Us</h3>
                                <p className="text-text-muted text-sm mb-3">Get a response within 24 hours.</p>
                                <span className="text-primary text-sm font-medium">support@tennissquad.app</span>
                            </a>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <Link
                                to="/faq"
                                className="block p-6 rounded-2xl bg-surface border border-border hover:border-cyan/30 transition-all duration-300 hover:-translate-y-1 text-center group"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-cyan/10 mb-4 group-hover:scale-110 transition-transform">
                                    <HelpCircle className="w-6 h-6 text-cyan" />
                                </div>
                                <h3 className="font-bold mb-2">FAQ</h3>
                                <p className="text-text-muted text-sm mb-3">Find quick answers to common questions.</p>
                                <span className="text-cyan text-sm font-medium">Browse FAQ &rarr;</span>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <a
                                href="mailto:hello@tennissquad.app"
                                className="block p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 text-center group"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-6 h-6 text-accent-light" />
                                </div>
                                <h3 className="font-bold mb-2">Feedback</h3>
                                <p className="text-text-muted text-sm mb-3">Share ideas to help us improve.</p>
                                <span className="text-accent-light text-sm font-medium">hello@tennissquad.app</span>
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}
