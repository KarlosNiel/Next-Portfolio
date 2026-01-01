import { Logo } from "@/components/atoms/Logo";
import { DesktopNavigation } from "../molecules/desktop-navigation/DesktopNavigation";
import { NAVIGATION_LINKS } from "@/lib/constants/navigation.constants";
import { MobileNavigation } from "../molecules/mobile-navigation/MobileNavigation";
import { ThemeToggle } from "../atoms/buttons/ThemeToggle";

export function Header() {
  return (
    <header className="dark:border-b dark:border-b-neutral-800">
      <nav className="mx-auto max-w-7xl h-16 flex items-center justify-between ">
        <div>
          <Logo className="h-16 sm:h-18 md:h-20 w-auto"/>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <DesktopNavigation navLinks={NAVIGATION_LINKS} />
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-row items-center">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNavigation navLinks={NAVIGATION_LINKS} />
          </div>
        </div>
      </nav>
    </header>
  );
}
