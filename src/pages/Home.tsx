import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { Users, Calendar, Trophy, Zap, Star, ArrowRight, ChevronRight, Target, Swords, MessageCircle } from "lucide-react"

const screenshots = [
    { src: "/screens/slide_01_hero.png", label: "Home" },
    { src: "/screens/slide_02_discover.png", label: "Discover" },
    { src: "/screens/slide_03_ladder.png", label: "Ladder" },
    { src: "/screens/slide_04_leaderboard.png", label: "Leaderboard" },
    { src: "/screens/slide_05_play.png", label: "Play" },
    { src: "/screens/slide_06_teams.png", label: "Teams" },
    { src: "/screens/slide_07_boxleague.png", label: "Box League" },
    { src: "/screens/slide_08_profile.png", label: "Profile" },
    { src: "/screens/slide_09_squad.png", label: "Squad" },
    { src: "/screens/slide_10_value.png", label: "Value" },
]

const features = [
    {
        icon: Target,
        title: "Live Scoring",
        description: "Full tennis rules, one tap a point, undo anything. Pro puts the score on your Lock Screen and Dynamic Island.",
        color: "from-primary/20 to-primary/5",
        iconColor: "text-primary",
        screenshot: "/screens/slide_05_play.png",
    },
    {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "See when your squad is free on the availability heatmap. One tap to set status, zero back-and-forth.",
        color: "from-blue-500/20 to-blue-500/5",
        iconColor: "text-blue-400",
        screenshot: "/screens/slide_01_hero.png",
    },
    {
        icon: Trophy,
        title: "Team Leagues",
        description: "Round robin, playoffs, champions. Standings that update themselves as scores come in.",
        color: "from-amber-500/20 to-amber-500/5",
        iconColor: "text-amber-400",
        screenshot: "/screens/slide_06_teams.png",
    },
    {
        icon: Swords,
        title: "Ladder & Box League",
        description: "Challenge-based rankings and monthly round-robin competitions with promotion and relegation.",
        color: "from-purple-500/20 to-purple-500/5",
        iconColor: "text-purple-400",
        screenshot: "/screens/slide_07_boxleague.png",
    },
    {
        icon: Zap,
        title: "Serve Coach",
        description: "Film a serve and get form analysis on device. Nothing is uploaded — it never leaves your phone.",
        color: "from-cyan-500/20 to-cyan-500/5",
        iconColor: "text-cyan-400",
        screenshot: "/screens/slide_08_profile.png",
    },
    {
        icon: MessageCircle,
        title: "Squad Chat & Subs",
        description: "Match and league threads, plus a one-tap “need a sub” broadcast. Replaces the group chat.",
        color: "from-pink-500/20 to-pink-500/5",
        iconColor: "text-pink-400",
        screenshot: "/screens/slide_09_squad.png",
    },
]

const problems = [
    { icon: "💬", title: "Endless Group Chats", desc: "\"Who's free Saturday?\" messages that go nowhere." },
    { icon: "⚖️", title: "Mismatched Skills", desc: "Playing with people way above or below your level." },
    { icon: "👻", title: "No-Show Players", desc: "People commit but mysteriously vanish on game day." },
    { icon: "🔁", title: "Same 4 People", desc: "Stuck playing with the same crew, every single week." },
]

const steps = [
    { num: "01", title: "Create or Join", desc: "Start a squad or join friends with a code.", icon: Users },
    { num: "02", title: "Set Availability", desc: "Mark when you're free on the heatmap.", icon: Calendar },
    { num: "03", title: "Schedule & Play", desc: "Create matches, challenge rivals, play.", icon: Target },
    { num: "04", title: "Track & Improve", desc: "Record scores, earn badges, climb ranks.", icon: Trophy },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const duration = 2000
        const startTime = performance.now()

        function tick(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.floor(eased * target)
            setCount(start)
            if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
    }, [isInView, target])

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    )
}

function PhoneMockup({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
    return (
        <div className={`phone-frame ${className}`}>
            <div className="phone-screen">
                <div className="phone-notch" />
                <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
        </div>
    )
}

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-border-light transition-all duration-500 p-6 h-full">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-surface-light/50 ${feature.iconColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Mini phone preview on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-4 right-4 w-20 h-40 rounded-xl overflow-hidden shadow-2xl border border-border-light"
                        >
                            <img src={feature.screenshot} alt="" className="w-full h-full object-cover" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

function InteractiveSpotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
    }

    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    const background = useTransform(
        [springX, springY],
        ([x, y]) => `radial-gradient(600px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(196, 248, 53, 0.04), transparent 50%)`
    )

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            style={{ background }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default function Home() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const [activeFeature, setActiveFeature] = useState(0)

    // Auto-rotate active feature
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % features.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col">
            {/* ==================== HERO ==================== */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
                {/* Background effects */}
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px]" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left: Text content */}
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-light/60 border border-border text-sm text-text-muted mb-6">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Coming soon to the App Store
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
                            >
                                Your Crew.
                                <br />
                                <span className="gradient-text">Your Court.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                            >
                                Keep score courtside, run leagues and ladders, and get your squad playing more — without the group-chat chaos.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                            >
                                <a
                                    href="#notify"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-background font-bold rounded-xl hover:bg-primary-muted transition-all hover:shadow-xl hover:shadow-primary/20 active:scale-[0.97] text-base"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    Coming Soon
                                </a>
                                <Link
                                    to="/features"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-surface-light/60 border border-border text-text font-semibold rounded-xl hover:bg-surface-light hover:border-border-light transition-all text-base"
                                >
                                    Explore Features
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                            {/* Social proof mini */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
                            >
                                <div className="flex -space-x-2">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-surface-light to-surface border-2 border-background flex items-center justify-center text-xs font-bold text-text-muted">
                                            {["SK", "MT", "JR", "AL"][i]}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center gap-1 text-primary">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-primary" />
                                        ))}
                                    </div>
                                    <span className="text-text-muted">Loved by players</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Phone mockups */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex-1 relative flex justify-center"
                        >
                            <div className="relative">
                                {/* Main phone */}
                                <div className="relative z-10 w-[240px] md:w-[280px]">
                                    <PhoneMockup src="/screens/slide_01_hero.png" alt="TennisSquad Home Screen" />
                                </div>

                                {/* Left phone - offset */}
                                <motion.div
                                    className="absolute -left-16 md:-left-24 top-12 w-[180px] md:w-[210px] opacity-60"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <PhoneMockup src="/screens/slide_03_ladder.png" alt="Ladder Rankings" />
                                </motion.div>

                                {/* Right phone - offset */}
                                <motion.div
                                    className="absolute -right-16 md:-right-24 top-12 w-[180px] md:w-[210px] opacity-60"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                >
                                    <PhoneMockup src="/screens/slide_05_play.png" alt="Schedule Matches" />
                                </motion.div>

                                {/* Glow behind phones */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -z-10" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-text-dark text-xs uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border-2 border-text-dark flex justify-center pt-1.5"
                    >
                        <div className="w-1 h-1.5 bg-text-dark rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ==================== PROBLEMS ==================== */}
            <section className="py-24 md:py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/50 to-background" />
                <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeInSection className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Problem</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Tired of the Tennis Shuffle?</h2>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto">
                            Organizing tennis shouldn't be harder than playing it.
                        </p>
                    </FadeInSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {problems.map((problem, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <InteractiveSpotlight className="h-full rounded-2xl bg-surface border border-border hover:border-border-light p-6 transition-all duration-300 hover:-translate-y-1">
                                    <div className="text-3xl mb-4">{problem.icon}</div>
                                    <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{problem.desc}</p>
                                </InteractiveSpotlight>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== SCREENSHOT MARQUEE ==================== */}
            <section className="py-16 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

                <FadeInSection className="text-center mb-12 relative z-20">
                    <span className="inline-block text-sm font-semibold text-cyan uppercase tracking-wider mb-3">App Preview</span>
                    <h2 className="text-3xl md:text-4xl font-black">Beautiful. Functional. Yours.</h2>
                </FadeInSection>

                <div className="relative">
                    <div className="flex marquee">
                        {[...screenshots, ...screenshots].map((s, i) => (
                            <div key={i} className="flex-shrink-0 w-[200px] md:w-[240px] mx-3">
                                <div className="rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl hover:border-border-light transition-all duration-300 hover:scale-[1.02]">
                                    <img
                                        src={s.src}
                                        alt={s.label}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <p className="text-center text-xs text-text-dark mt-2 font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== FEATURES GRID ==================== */}
            <section className="py-24 md:py-32 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <FadeInSection className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-accent-light uppercase tracking-wider mb-3">Features</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Everything You Need to Play More</h2>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto">
                            From squad management to competitive ladders, TennisSquad is your all-in-one tennis companion.
                        </p>
                    </FadeInSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((feature, i) => (
                            <FeatureCard key={i} feature={feature} index={i} />
                        ))}
                    </div>

                    <FadeInSection className="text-center mt-12">
                        <Link
                            to="/features"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            Explore all features in detail
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* ==================== INTERACTIVE FEATURE SHOWCASE ==================== */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/30 to-background" />
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeInSection className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">In Action</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-4">See It In Action</h2>
                    </FadeInSection>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        {/* Feature selector */}
                        <div className="flex-1 w-full">
                            <div className="space-y-3">
                                {features.map((f, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() => setActiveFeature(i)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                                            activeFeature === i
                                                ? "bg-surface-light/60 border-primary/30 shadow-lg shadow-primary/5"
                                                : "bg-transparent border-border hover:border-border-light hover:bg-surface/50"
                                        }`}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${activeFeature === i ? "bg-primary/20" : "bg-surface-light"}`}>
                                                <f.icon className={`w-5 h-5 ${activeFeature === i ? f.iconColor : "text-text-muted"}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className={`font-semibold text-sm ${activeFeature === i ? "text-text" : "text-text-muted"}`}>
                                                    {f.title}
                                                </h4>
                                                <AnimatePresence mode="wait">
                                                    {activeFeature === i && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-text-muted text-xs mt-1 leading-relaxed"
                                                        >
                                                            {f.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            {activeFeature === i && (
                                                <motion.div
                                                    layoutId="feature-indicator"
                                                    className="w-1 h-8 bg-primary rounded-full flex-shrink-0"
                                                />
                                            )}
                                        </div>
                                        {/* Progress bar for auto-rotate */}
                                        {activeFeature === i && (
                                            <motion.div
                                                className="h-0.5 bg-primary/30 rounded-full mt-3"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 4, ease: "linear" }}
                                                key={`progress-${i}-${activeFeature}`}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Phone preview */}
                        <div className="flex-1 flex justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, x: 30, rotateY: -5 }}
                                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                    exit={{ opacity: 0, x: -30, rotateY: 5 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-[260px] md:w-[300px]"
                                >
                                    <PhoneMockup
                                        src={features[activeFeature].screenshot}
                                        alt={features[activeFeature].title}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== STATS ==================== */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-cyan/5" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { value: 12, suffix: "", label: "Badges to Earn" },
                            { value: 8, suffix: "", label: "Pro Features" },
                            { value: 0, suffix: "", label: "Data Sold, Ever" },
                        ].map((stat, i) => (
                            <FadeInSection key={i} delay={i * 0.1} className="text-center">
                                <div className="text-4xl md:text-5xl font-black gradient-text-warm mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-text-muted text-sm font-medium">{stat.label}</div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== HOW IT WORKS ==================== */}
            <section className="py-24 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <FadeInSection className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-cyan uppercase tracking-wider mb-3">How It Works</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Up and Running in Minutes</h2>
                    </FadeInSection>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <FadeInSection key={i} delay={i * 0.12}>
                                <div className="relative group">
                                    {/* Connector line */}
                                    {i < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border-light to-transparent z-0" />
                                    )}
                                    <div className="relative p-6 rounded-2xl bg-surface border border-border hover:border-border-light transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl font-black text-text-dark">{step.num}</span>
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <step.icon className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                        <p className="text-text-muted text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== TESTIMONIALS ==================== */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/30 to-background" />
                <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeInSection className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-pink uppercase tracking-wider mb-3">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Players Love TennisSquad</h2>
                    </FadeInSection>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { quote: "Built by a player who got tired of running a squad from a spreadsheet and a group chat.", author: "Why it exists", role: "From the maker", rating: 5 },
                            { quote: "Serve Coach analyzes your form entirely on your phone. Your video is never uploaded.", author: "Privacy first", role: "On-device analysis", rating: 5 },
                            { quote: "One Pro plan. No organizer tier, no per-seat pricing, no ads.", author: "Simple pricing", role: "Free to start", rating: 5 },
                        ].map((t, i) => (
                            <FadeInSection key={i} delay={i * 0.15}>
                                <div className="h-full p-6 rounded-2xl bg-surface border border-border hover:border-border-light transition-all duration-300">
                                    <div className="flex gap-0.5 mb-4">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-text/90 leading-relaxed mb-6 text-[15px]">"{t.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-sm font-bold">
                                            {t.author.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{t.author}</p>
                                            <p className="text-text-muted text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== CTA ==================== */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
                </div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
                    <FadeInSection>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Ready to Play
                            <br />
                            <span className="gradient-text">More Tennis?</span>
                        </h2>
                        <p className="text-lg text-text-muted max-w-xl mx-auto mb-10">
                            Download TennisSquad free and organize your first match in minutes. No credit card needed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#notify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-xl hover:bg-primary-muted transition-all hover:shadow-xl hover:shadow-primary/25 active:scale-[0.97] text-lg"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                App Store — Coming Soon
                            </a>
                            <div className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-light/40 border border-border text-text-muted font-semibold rounded-xl text-lg cursor-not-allowed opacity-60">
                                Google Play — Coming Soon
                            </div>
                        </div>

                        <p className="text-text-dark text-sm mt-6">Free to use. Premium features available.</p>
                    </FadeInSection>
                </div>
            </section>
        </div>
    )
}
