import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Copy, Check, Smartphone, Download, UserPlus } from "lucide-react"

const APP_STORE_URL = "https://apps.apple.com/app/id6758974073"

/**
 * Landing page for squad invite links: https://tennissquad.app/join?code=ABC123
 *
 * The app's own scheme (com.tennissquad.app://) is not tappable in WhatsApp and
 * does nothing for someone who hasn't installed the app yet. This page is an
 * ordinary https link that works everywhere: it opens the app when it's
 * installed, and otherwise sends people to the App Store with the code to hand.
 */
export default function Join() {
    const [params] = useSearchParams()
    // Codes are uppercase alphanumerics (max 8). Anything else is dropped, so
    // nothing from the URL is ever rendered or linked unsanitised.
    const code = (params.get("code") ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8)
    const [copied, setCopied] = useState(false)

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Clipboard can be blocked; the code is on screen to type instead.
        }
    }

    return (
        <div className="flex flex-col">
            <section className="pt-28 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

                <div className="max-w-xl mx-auto px-5 md:px-8 relative z-10 text-center">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Squad Invite
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">You're invited to a tennis squad</h1>
                    <p className="text-lg text-text-muted mb-10">
                        Your group schedules matches, keeps score and runs its ladder in Tennis Squad.
                    </p>

                    {code ? (
                        <>
                            <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 mb-8">
                                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                                    Squad code
                                </div>
                                <div className="text-4xl md:text-5xl font-black tracking-[0.25em] text-primary mb-4">
                                    {code}
                                </div>
                                <button
                                    onClick={copyCode}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-white transition-colors"
                                >
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                    {copied ? "Copied" : "Copy code"}
                                </button>
                            </div>

                            <div className="flex flex-col gap-3 mb-12">
                                <a
                                    href={`com.tennissquad.app://join?code=${code}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-background font-bold py-4 px-6 hover:opacity-90 transition-opacity"
                                >
                                    <Smartphone size={20} />
                                    Open in Tennis Squad
                                </a>
                                <a
                                    href={APP_STORE_URL}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 font-bold py-4 px-6 hover:bg-white/5 transition-colors"
                                >
                                    <Download size={20} />
                                    Get the app on the App Store
                                </a>
                            </div>

                            <ol className="text-left space-y-4 text-text-muted">
                                <li className="flex gap-3">
                                    <Download className="shrink-0 text-primary" size={20} />
                                    <span>Don't have the app yet? Download Tennis Squad from the App Store. It's free.</span>
                                </li>
                                <li className="flex gap-3">
                                    <UserPlus className="shrink-0 text-primary" size={20} />
                                    <span>Create your account, then come back here and tap <strong className="text-white">Open in Tennis Squad</strong>.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Copy className="shrink-0 text-primary" size={20} />
                                    <span>Or in the app, tap <strong className="text-white">Join a squad</strong> and enter code <strong className="text-white">{code}</strong>.</span>
                                </li>
                            </ol>
                        </>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <p className="text-text-muted mb-4">
                                This invite link is missing its squad code. Ask your friend to send the invite again.
                            </p>
                            <a
                                href={APP_STORE_URL}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-background font-bold py-4 px-6 hover:opacity-90 transition-opacity"
                            >
                                <Download size={20} />
                                Get Tennis Squad on the App Store
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
