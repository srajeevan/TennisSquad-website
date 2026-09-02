import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
            {children}
        </motion.div>
    )
}

export default function Terms() {
    return (
        <div className="pt-28 pb-24">
            <div className="max-w-3xl mx-auto px-5 md:px-8">
                <FadeIn>
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Legal</span>
                    <h1 className="text-4xl font-black mb-4">Terms of Service</h1>
                    <p className="text-text-muted mb-12">Last updated: February 16, 2026</p>
                </FadeIn>

                <FadeIn>
                    <div className="prose prose-invert max-w-none space-y-8 text-text/85 text-[15px] leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">1. Acceptance of Terms</h2>
                            <p>By downloading, accessing, or using TennisSquad ("the App"), you agree to be bound by these Terms. If you do not agree, do not use the App.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">2. Description of Service</h2>
                            <p>TennisSquad helps tennis players organize matches, manage tennis groups ("Squads"), track rankings, and discover nearby players.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">3. Eligibility</h2>
                            <p>You must be at least 13 years old to use TennisSquad. If you are under 18, you must have parental consent.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">4. User Conduct</h2>
                            <p>You agree NOT to use the App for unlawful purposes, harass others, or violate applicable laws.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">5. Subscriptions</h2>
                            <p>Paid plans (Pro monthly, Pro annual, Lifetime) are billed through the respective App Store. Subscriptions auto-renew unless cancelled 24 hours before the end of the period.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">6. Data & Privacy</h2>
                            <p>Your use of the App is subject to our Privacy Policy. We collect data to facilitate core app features like scheduling and matchmaking.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">7. Disclaimers</h2>
                            <p>The App is provided "as is". We are not responsible for physical injuries occurring during tennis activities organized through the App.</p>
                        </section>
                        <section className="pt-6 border-t border-border">
                            <h2 className="text-xl font-bold text-text mb-3">Contact Us</h2>
                            <p>For questions about these Terms: <a href="mailto:legal@tennissquad.app" className="text-primary hover:underline">legal@tennissquad.app</a></p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
