import Link from "next/link"

type SocialIconProps = {
    href: string
    icon: React.ReactNode | string
    label: string
    className?: string
}

export function SocialIcon({ href, icon, label, className}: SocialIconProps){
    return (
        <Link 
            href={href}
            target="_blank"
            rel="noopaener noreferrer"
            aria-label={label}
            title={label}
            className={className}
        >
            {icon}
        </Link>
    )
}