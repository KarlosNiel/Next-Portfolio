type SocialIconProps = {
    href: string
    icon: React.ReactNode
    label: string
}

export function SocialIcon({ href, icon, label}: SocialIconProps){
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className=""
        >
            {icon}
        </a>
    )
}