import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/faq" },
        { name: "Support", href: "/support" },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled || isOpen
                    ? "glass-strong shadow-lg shadow-black/20"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                            <span className="text-background font-black text-lg leading-none">T</span>
                            <div className="absolute inset-0 rounded-xl bg-primary/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Tennis<span className="text-primary">Squad</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                        isActive
                                            ? "text-primary"
                                            : "text-text-muted hover:text-text"
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#notify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-background font-semibold text-sm rounded-xl hover:bg-primary-muted transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Download App
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-text hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden glass-strong border-t border-border overflow-hidden"
                    >
                        <div className="px-5 py-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="block px-4 py-3 text-lg font-medium text-text-muted hover:text-primary hover:bg-surface-light/50 rounded-xl transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="pt-4"
                            >
                                <a
                                    href="#notify"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-background font-semibold rounded-xl"
                                >
                                    Download App
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
