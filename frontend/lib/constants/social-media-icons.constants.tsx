import { AtSignIcon } from '@/components/ui/icons/motion/at-sign';
import { GithubIcon } from '@/components/ui/icons/motion/github';
import { InstagramIcon } from '@/components/ui/icons/motion/instagram';
import { LinkedinIcon } from '@/components/ui/icons/motion/linkedin';

export const SOCIAL_MEDIA_ICONS = [
    {href: "https://github.com", icon: <GithubIcon  size={24}/>, label: "Github", className: "bg-black text-white dark:bg-neutral-900 p-2 rounded-sm duration-300"},
    {href: "https://linkedin.com", icon: <LinkedinIcon size={24}/>, label: "Linkedin",  className: "bg-[#0A66C2] text-white p-2 rounded-sm duration-300" },
    {href: "https://instagram.com", icon: <InstagramIcon size={24}/>, label: "Instagram", className: "bg-[#A831BF] text-white p-2 rounded-sm duration-300" },
    {href: "mailto:carlosdanieltowork@gmail.com", icon: <AtSignIcon size={24}/>, label: "Email", className: "bg-[#ff0000] text-white p-2 rounded-sm duration-300" }

]   