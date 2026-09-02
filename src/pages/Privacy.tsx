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

export default function Privacy() {
    return (
        <div className="pt-28 pb-24">
            <div className="max-w-3xl mx-auto px-5 md:px-8">
                <FadeIn>
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Legal</span>
                    <h1 className="text-4xl font-black mb-4">Privacy Policy</h1>
                    <p className="text-text-muted mb-12">Last updated: February 16, 2026</p>
                </FadeIn>

                <FadeIn>
                    <div className="prose prose-invert max-w-none space-y-8 text-text/85 text-[15px] leading-relaxed">
                        <p>TennisSquad ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>

                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">1. Information We Collect</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-text">Information You Provide:</strong> Name, email, profile photo, tennis profile data.</li>
                                <li><strong className="text-text">Automatically Collected:</strong> Device info, usage data, crash logs.</li>
                                <li><strong className="text-text">Location:</strong> We do not request or collect your location. Serve Coach video analysis runs on your device and is never uploaded.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">2. How We Use Your Information</h2>
                            <p>We use your data to provide core app features (match scheduling, squads, leaderboards), process payments/subscriptions, and improve the app experience.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">3. Sharing Information</h2>
                            <p>We share necessary data with trusted service providers (Clerk for auth, Convex for database, RevenueCat for payments). We do NOT sell your personal data.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">4. Your Rights</h2>
                            <p>You can access, update, or delete your account at any time through the app settings. Account deletion permanently removes your profile and data.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-text mb-3">5. Children</h2>
                            <p>The app is not intended for children under 13. We do not knowingly collect data from children under 13.</p>
                        </section>
                        <section className="pt-6 border-t border-border">
                            <h2 className="text-xl font-bold text-text mb-3">Contact Us</h2>
                            <p>For privacy questions: <a href="mailto:privacy@tennissquad.app" className="text-primary hover:underline">privacy@tennissquad.app</a></p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
