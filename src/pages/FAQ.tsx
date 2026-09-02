import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail } from "lucide-react"

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

const categories = [
    {
        name: "Getting Started",
        color: "text-primary",
        questions: [
            {
                q: "What is TennisSquad?",
                a: "TennisSquad is a mobile app that helps tennis players organize matches, manage groups (squads), and compete with friends through ladders and box leagues. Think of it as the command center for your tennis life."
            },
            {
                q: "Is TennisSquad free?",
                a: "Yes! The free plan includes all core features: match scheduling, availability tracking, ladder rankings, weekly challenges, and badges. Premium plans unlock additional features like nearby discovery and multi-squad support."
            },
            {
                q: "How do I create a squad?",
                a: "Open the app, go to the Squad tab, and tap 'Create Squad.' You'll get a unique code to share with friends via WhatsApp, text, or any messaging app. They can join by entering the code."
            },
            {
                q: "How many people can join a squad?",
                a: "There's no limit on the number of members per squad! Invite as many players as you want. The Free plan supports 1 squad, while Pro and Lifetime plans give you unlimited squads."
            }
        ]
    },
    {
        name: "Matches & Scheduling",
        color: "text-cyan",
        questions: [
            {
                q: "How do I schedule a match?",
                a: "Tap the + button or 'Schedule Match' on the Play tab. Fill in the details (date, time, location, duration, players needed) and save. Your squad will be notified automatically."
            },
            {
                q: "Can I see when everyone is free?",
                a: "Yes! The availability heatmap shows when most players are available across the week (AM, PM, Evening slots). Set your own availability with one tap, and the app suggests the best times to play."
            },
            {
                q: "What are ladder challenges?",
                a: "The ladder is a ranking system within your squad. You can challenge players within 3-5 positions above you. Win the match and you swap positions. Challenges expire after 7 days if not completed."
            },
            {
                q: "What is Box League?",
                a: "Box League is a monthly round-robin competition within your squad. Players are grouped into divisions and play against everyone in their division. Top players get promoted, bottom players get relegated."
            }
        ]
    },
    {
        name: "Subscriptions & Billing",
        color: "text-accent-light",
        questions: [
            {
                q: "What does the Pro plan include?",
                a: "Pro ($6.99/month) includes everything in Free, plus unlimited squads, nearby player discovery, 'Open to Play' visibility, ability to join matches outside your squad, and priority support."
            },
            {
                q: "What is the Lifetime deal?",
                a: "Pay $49 once and get all Pro features forever. No monthly fees. This is a special early adopter offer that includes all future premium updates. It's the best value if you plan to use TennisSquad long-term."
            },
            {
                q: "How do I cancel my subscription?",
                a: "Subscriptions are managed through your App Store (Apple) account. Go to Settings > Apple ID > Subscriptions on your device to manage or cancel your subscription."
            },
            {
                q: "Is there a free trial?",
                a: "The annual Pro plan comes with a 7-day free trial. Cancel before it ends and you will not be charged. Monthly Pro and Lifetime have no trial."
            }
        ]
    }
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="border border-border rounded-xl bg-surface/50 overflow-hidden hover:border-border-light transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-5 text-left font-medium hover:bg-surface-light/30 transition-colors gap-4"
            >
                <span className="text-[15px]">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="h-4 w-4 text-text-muted" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-border/50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="pt-28 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px]" />

                <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
                    <FadeIn className="text-center">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</span>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h1>
                        <p className="text-lg text-text-muted">
                            Everything you need to know about TennisSquad.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-12 pb-24">
                <div className="max-w-3xl mx-auto px-5 md:px-8">
                    <div className="space-y-12">
                        {categories.map((category, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div>
                                    <h2 className={`text-lg font-bold mb-5 ${category.color}`}>{category.name}</h2>
                                    <div className="space-y-3">
                                        {category.questions.map((item, qIdx) => (
                                            <FAQItem key={qIdx} question={item.q} answer={item.a} index={qIdx} />
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <FadeIn className="mt-16">
                        <div className="p-8 rounded-2xl bg-surface border border-border text-center">
                            <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Still have questions?</h3>
                            <p className="text-text-muted text-sm mb-5">We're here to help you out.</p>
                            <a
                                href="mailto:support@tennissquad.app"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-background font-semibold rounded-xl hover:bg-primary-muted transition-all text-sm"
                            >
                                Contact Support
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
