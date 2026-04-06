import { Link } from "react-router-dom"
import { Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-border">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-background font-black text-base leading-none">T</span>
                            </div>
                            <span className="text-lg font-bold">
                                Tennis<span className="text-primary">Squad</span>
                            </span>
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                            The easiest way to organize matches, discover players, and compete with your local tennis community.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-sm text-text mb-4 uppercase tracking-wider">Product</h3>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><a href="https://apps.apple.com/us/app/tennissquad" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Download</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-sm text-text mb-4 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/support" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><a href="mailto:support@tennissquad.app" className="hover:text-primary transition-colors">Email</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-sm text-text mb-4 uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-dark text-sm">
                        &copy; {currentYear} TennisSquad. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 rounded-lg text-text-dark hover:text-primary hover:bg-surface-light transition-all">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="#" className="p-2 rounded-lg text-text-dark hover:text-primary hover:bg-surface-light transition-all">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href="mailto:hello@tennissquad.app" className="p-2 rounded-lg text-text-dark hover:text-primary hover:bg-surface-light transition-all">
                            <Mail className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
