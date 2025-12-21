import Link from "next/link"

type SocialIconProps = {
    href: string
    icon: React.ReactNode | string
    label: string
}

export function SocialIcon({ href, icon, label}: SocialIconProps){
    return (
        <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="size-5"
        >
            {icon}
        </Link>
    )
}