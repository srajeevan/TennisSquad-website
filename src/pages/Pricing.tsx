import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { Check, X, Sparkles, Crown, Zap } from "lucide-react"

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

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for casual players and small groups.",
        icon: Zap,
        color: "text-text-muted",
        featured: false,
        features: [
            "1 Squad membership",
            "Unlimited members per squad",
            "Match scheduling",
            "Availability heatmap",
            "Ladder rankings & challenges",
            "Weekly challenges & badges",
            "Basic stats tracking",
        ],
        cta: "Get Started Free",
    },
    {
        name: "Explorer",
        price: "$6.99",
        period: "/ month",
        description: "For serious players expanding their network.",
        icon: Sparkles,
        color: "text-primary",
        featured: true,
        badge: "Most Popular",
        features: [
            "Everything in Free, plus:",
            "Unlimited squads",
            "Nearby player discovery",
            "'Open to Play' visibility",
            "Join matches outside your squad",
            "Advanced match filters",
            "Priority support",
        ],
        cta: "Start 7-Day Free Trial",
    },
    {
        name: "Lifetime",
        price: "$49",
        period: "one-time",
        description: "Pay once, own it forever. Limited offer.",
        icon: Crown,
        color: "text-accent-light",
        featured: false,
        badge: "Limited Time",
        features: [
            "All Explorer features forever",
            "No monthly fees, ever",
            "Future premium updates included",
            "Early adopter badge",
            "Direct developer support",
        ],
        cta: "Get Lifetime Access",
    },
]

const comparisonFeatures = [
    { name: "Squads", free: "1", explorer: "Unlimited", lifetime: "Unlimited" },
    { name: "Members per Squad", free: "Unlimited", explorer: "Unlimited", lifetime: "Unlimited" },
    { name: "Match Scheduling", free: true, explorer: true, lifetime: true },
    { name: "Availability Heatmap", free: true, explorer: true, lifetime: true },
    { name: "Ladder Rankings", free: true, explorer: true, lifetime: true },
    { name: "Box League", free: true, explorer: true, lifetime: true },
    { name: "Badges & Challenges", free: true, explorer: true, lifetime: true },
    { name: "Nearby Discovery", free: false, explorer: true, lifetime: true },
    { name: "Open to Play Status", free: false, explorer: true, lifetime: true },
    { name: "Join Public Matches", free: false, explorer: true, lifetime: true },
    { name: "Advanced Filters", free: false, explorer: true, lifetime: true },
    { name: "Priority Support", free: false, explorer: true, lifetime: true },
]

export default function Pricing() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="pt-28 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Simple, <span className="gradient-text">Transparent</span> Pricing
                        </h1>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto">
                            Start completely free. Upgrade when you're ready to take your game to the next level.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <FadeIn key={plan.name} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3 }}
                                    className={`relative flex flex-col h-full rounded-2xl p-7 border transition-all duration-300 ${
                                        plan.featured
                                            ? "bg-surface border-primary/30 shadow-2xl shadow-primary/10"
                                            : "bg-surface border-border hover:border-border-light"
                                    }`}
                                >
                                    {plan.badge && (
                                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold shadow-lg ${
                                            plan.featured
                                                ? "bg-primary text-background"
                                                : "bg-accent text-white"
                                        }`}>
                                            {plan.badge}
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <div className={`inline-flex p-2.5 rounded-xl ${plan.featured ? "bg-primary/10" : "bg-surface-light"} mb-4`}>
                                            <plan.icon className={`w-5 h-5 ${plan.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                                        <p className="text-text-muted text-sm">{plan.description}</p>
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-4xl font-black">{plan.price}</span>
                                        <span className="text-text-muted text-sm ml-1">{plan.period}</span>
                                    </div>

                                    <div className="flex-grow space-y-3 mb-8">
                                        {plan.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-2.5 text-sm">
                                                <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-primary" : "text-text-muted"}`} />
                                                <span className="text-text/85">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="https://apps.apple.com/us/app/tennissquad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.97] ${
                                            plan.featured
                                                ? "bg-primary text-background hover:bg-primary-muted shadow-lg shadow-primary/20"
                                                : "bg-surface-light border border-border text-text hover:bg-surface-light/80 hover:border-border-light"
                                        }`}
                                    >
                                        {plan.cta}
                                    </a>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-surface-dark/30" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

                <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-black">Feature Comparison</h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="py-4 px-5 font-medium text-text-muted text-sm">Feature</th>
                                        <th className="py-4 px-5 font-bold text-sm text-center">Free</th>
                                        <th className="py-4 px-5 font-bold text-sm text-center text-primary">Explorer</th>
                                        <th className="py-4 px-5 font-bold text-sm text-center">Lifetime</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((row, i) => (
                                        <tr key={i} className="border-b border-border/50 hover:bg-surface-light/30 transition-colors">
                                            <td className="py-3.5 px-5 text-sm font-medium">{row.name}</td>
                                            <td className="py-3.5 px-5 text-center">{renderValue(row.free)}</td>
                                            <td className="py-3.5 px-5 text-center">{renderValue(row.explorer)}</td>
                                            <td className="py-3.5 px-5 text-center">{renderValue(row.lifetime)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="py-16 text-center">
                <div className="max-w-3xl mx-auto px-5 md:px-8">
                    <FadeIn>
                        <h2 className="text-2xl font-bold mb-3">Have questions?</h2>
                        <p className="text-text-muted mb-6">
                            Check out our FAQ for answers about billing, features, and more.
                        </p>
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            Visit FAQ Page
                            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                &rarr;
                            </motion.span>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}

function renderValue(val: boolean | string) {
    if (val === true) return <Check className="h-4 w-4 text-primary mx-auto" />
    if (val === false) return <X className="h-4 w-4 text-text-dark mx-auto" />
    return <span className="text-sm font-medium">{val}</span>
}
