import { NavLink } from "@/components/atoms/links/NavLink";
import { NavigationProps } from "@/lib/types/types";


export function DesktopNavigation({ navLinks }: NavigationProps) {
  return (
    <div className="hidden md:flex items-center gap-8 ">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>
  );
}
