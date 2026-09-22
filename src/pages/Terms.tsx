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
                    <p className="text-text-muted mb-12">Last updated: September 22, 2026</p>
                </FadeIn>

                <FadeIn>
                    <div className="prose prose-invert max-w-none space-y-8 text-text/85 text-[15px] leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">1. Acceptance of Terms</h2>
                            <p>By downloading, accessing, or using TennisSquad ("the App"), you agree to be bound by these Terms. If you do not agree, do not use the App.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">2. Description of Service</h2>
                            <p>TennisSquad helps tennis players organize matches, manage tennis groups ("Squads"), keep score, run leagues and track rankings.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">3. Eligibility</h2>
                            <p>You must be at least 13 years old to use TennisSquad. If you are under 18, you must have parental consent.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">4. User Conduct and Objectionable Content</h2>
                            <p className="font-semibold text-text">TennisSquad has zero tolerance for objectionable content and for abusive users. This is a condition of using the App, not a guideline.</p>
                            <p className="mt-3">You agree NOT to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Post, send or share objectionable content, including content that is harassing, threatening, hateful, sexually explicit, violent, defamatory, or that targets a person or group on the basis of race, ethnicity, religion, gender, sexual orientation, disability or nationality</li>
                                <li>Harass, abuse, bully, stalk, intimidate or harm other users</li>
                                <li>Impersonate any person or entity</li>
                                <li>Use the App for any unlawful purpose</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                            <p className="mt-3">Every message from another player can be reported using the "..." control on the message. You may block any user from the same control; blocking removes their messages from your view immediately. Reports are reviewed by a person and acted on within 24 hours. We remove objectionable content and terminate the accounts of users who post it or who behave abusively.</p>
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
