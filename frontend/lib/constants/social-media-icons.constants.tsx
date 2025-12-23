import { AtSignIcon } from '@/components/ui/at-sign';
import { GithubIcon } from '@/components/ui/github';
import { InstagramIcon } from '@/components/ui/instagram';
import { LinkedinIcon } from '@/components/ui/linkedin';

export const SOCIAL_MEDIA_ICONS = [
    {href: "https://github.com", icon: <GithubIcon  size={24}/>, label: "Github" },
    {href: "https://linkedin.com", icon: <LinkedinIcon size={24}/>, label: "Linkedin" },
    {href: "https://instagram.com", icon: <InstagramIcon size={24}/>, label: "Instagram" },
    {href: "mailto:carlosdanieltowork@gmail.com", icon: <AtSignIcon size={24}/>, label: "Email" }

]   