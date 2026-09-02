import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { Users, Calendar, Trophy, CheckCircle, ArrowRight, Swords, Award, Target, Shuffle, BarChart3, Bell } from "lucide-react"

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

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="phone-frame">
            <div className="phone-screen">
                <div className="phone-notch" />
                <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
        </div>
    )
}

const mainFeatures = [
    {
        id: "squads",
        icon: Users,
        color: "text-primary",
        bg: "bg-primary/10",
        title: "Squad Management",
        subtitle: "Your Tennis Crew, Organized",
        description: "Create private squads for your club, apartment complex, or friend group. Invite members with a simple code and keep everyone in sync.",
        points: [
            "Create or join squads with unique invite codes",
            "Member directory with skill levels & NTRP ratings",
            "Admin controls for organizers",
            "Unlimited members per squad",
            "WhatsApp integration for easy sharing",
            "Multi-squad support (unlimited with paid plans)"
        ],
        image: "/screens/slide_09_squad.png",
    },
    {
        id: "scheduling",
        icon: Calendar,
        color: "text-cyan",
        bg: "bg-cyan/10",
        title: "Smart Scheduling",
        subtitle: "See When Everyone's Free",
        description: "No more 'who's free Saturday?' messages. The visual availability heatmap shows the best times to play at a glance.",
        points: [
            "Weekly availability heatmap (AM, PM, Evening)",
            "One-tap status updates",
            "Automatic 'Best Times to Play' suggestions",
            "See confirmed vs. tentative players",
            "Match reminders and notifications"
        ],
        image: "/screens/slide_05_play.png",
    },
    {
        id: "ladder",
        icon: Trophy,
        color: "text-accent-light",
        bg: "bg-accent/10",
        title: "Ladder Rankings",
        subtitle: "Compete & Climb",
        description: "Add friendly competition with the challenge-based ladder system. Issue challenges, win matches, and rise to the top.",
        points: [
            "Real-time squad rankings",
            "Challenge players within 3-5 positions",
            "Win to climb, fair matchup system",
            "7-day challenge expiration",
            "Win/loss tracking and position history"
        ],
        image: "/screens/slide_03_ladder.png",
    },
    {
        id: "boxleague",
        icon: Swords,
        color: "text-pink",
        bg: "bg-pink/10",
        title: "Box League",
        subtitle: "Structured Competition",
        description: "Monthly round-robin tournaments with divisions, automatic pairings, and a promotion/relegation system.",
        points: [
            "Monthly round-robin competitions",
            "Multiple skill-based divisions",
            "Automatic match pairings",
            "Promotion/relegation system",
            "Live standings with points tracking"
        ],
        image: "/screens/slide_07_boxleague.png",
    },
    {
        id: "scoring",
        icon: Target,
        color: "text-cyan",
        bg: "bg-cyan/10",
        title: "Live Scoring & Serve Coach",
        subtitle: "Courtside, Not Desk-side",
        description: "Keep score with full tennis rules — one tap a point, undo anything. Film a serve and get form analysis that runs entirely on your phone.",
        points: [
            "Full rules: ad / no-ad, tiebreaks, best of 1, 3 or 5",
            "Live score on the Lock Screen and Dynamic Island (Pro)",
            "Serve Coach: on-device body-pose analysis",
            "Nothing is uploaded — your video never leaves the phone",
            "Undo any point, dispute any result"
        ],
        image: "/screens/slide_05_play.png",
        badge: "Free",
    },
]

const additionalFeatures = [
    { icon: Award, title: "Badges & Achievements", desc: "12 unique badges to unlock, from First Rally to Ladder King." },
    { icon: Target, title: "Weekly Challenges", desc: "Earn points by completing weekly goals to stay motivated." },
    { icon: Shuffle, title: "Team Generator", desc: "One-tap fair team shuffling with skill-based balancing." },
    { icon: BarChart3, title: "Player Statistics", desc: "Track wins, losses, streaks, and career stats over time." },
    { icon: Bell, title: "Smart Notifications", desc: "Match reminders, challenge alerts, and squad updates." },
    { icon: Users, title: "Team Leagues", desc: "Round robin, playoffs and champions with standings that update themselves." },
    { icon: Bell, title: "Squad Chat & Subs", desc: "Match and league threads plus a one-tap “need a sub” broadcast." },
]

export default function Features() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="pt-28 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Everything You Need to
                            <br />
                            <span className="gradient-text">Play More Tennis</span>
                        </h1>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto">
                            From casual rallies to competitive ladders, TennisSquad gives you the tools to organize, compete, and grow.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Features - Alternating */}
            {mainFeatures.map((feature, i) => (
                <section
                    key={feature.id}
                    id={feature.id}
                    className={`py-20 md:py-28 relative ${i % 2 === 1 ? "" : ""}`}
                >
                    {i % 2 === 0 && <div className="absolute inset-0 bg-surface-dark/30" />}
                    <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            {/* Text */}
                            <div className="flex-1 space-y-6">
                                <FadeIn>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`p-2.5 rounded-xl ${feature.bg}`}>
                                            <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                        </div>
                                        {feature.badge && (
                                            <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-semibold uppercase tracking-wider">
                                                {feature.badge}
                                            </span>
                                        )}
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.1}>
                                    <h2 className="text-3xl md:text-4xl font-black leading-tight">{feature.subtitle}</h2>
                                </FadeIn>

                                <FadeIn delay={0.15}>
                                    <p className="text-lg text-text-muted leading-relaxed">{feature.description}</p>
                                </FadeIn>

                                <FadeIn delay={0.2}>
                                    <ul className="space-y-3 pt-2">
                                        {feature.points.map((point, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-text/85 text-[15px]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeIn>
                            </div>

                            {/* Phone */}
                            <FadeIn delay={0.2} className="flex-1 flex justify-center">
                                <div className="relative w-[240px] md:w-[280px]">
                                    <PhoneMockup src={feature.image} alt={feature.subtitle} />
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] ${feature.bg} blur-[80px] -z-10 rounded-full`} />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            ))}

            {/* Additional Features Grid */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <FadeIn className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-accent-light uppercase tracking-wider mb-3">And More</span>
                        <h2 className="text-3xl md:text-4xl font-black">Plus Everything Else</h2>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {additionalFeatures.map((f, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="p-6 rounded-2xl bg-surface border border-border hover:border-border-light transition-all duration-300 hover:-translate-y-1">
                                    <div className="p-2.5 rounded-xl bg-surface-light inline-flex mb-4">
                                        <f.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-2">{f.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to upgrade your game?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#notify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-background font-bold rounded-xl hover:bg-primary-muted transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
                            >
                                Download TennisSquad
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link
                                to="/pricing"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-surface-light/60 border border-border text-text font-semibold rounded-xl hover:bg-surface-light transition-all"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
