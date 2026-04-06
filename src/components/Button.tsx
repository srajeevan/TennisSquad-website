import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { Loader2 } from "lucide-react"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
    isLoading?: boolean
    href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", isLoading, children, href, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-surface-dark hover:bg-primary-muted shadow-lg shadow-primary/20",
            secondary: "bg-surface-light text-text hover:bg-surface-light/80 border border-surface-light",
            outline: "border border-primary text-primary hover:bg-primary/10",
            ghost: "hover:bg-surface-light text-text",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-xl px-8 text-lg",
            icon: "h-10 w-10",
        }

        const baseStyles = cn(
            "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
        )

        if (href) {
            if (href.startsWith("http") || href.startsWith("#")) {
                return (
                    <a href={href} className={baseStyles} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        {children}
                    </a>
                )
            }
            return (
                <Link to={href} className={baseStyles}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {children}
                </Link>
            )
        }

        return (
            <button
                className={baseStyles}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
