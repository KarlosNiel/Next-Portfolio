import type React from "react";
import Link from "next/link";
import { Link as HeroLink } from "@heroui/react";

export type NavLinkProps = {
  href: string;
  label: string;
}

/**
 * Link de navegação tanto para outras páginas ou para IDs HTML na própria página, 
 * como ir para a sessão de contatos no footer.
 * 
 * Verifica se o href começa com "#" ai ele age como um <a>, 
 * se for um link para viajar até outra página ele utiliza o Link do Next
 */

export function NavLink({ href, label }: NavLinkProps) {
  const isAnchor = href.startsWith("#");

  if (isAnchor) {
    return (
      <HeroLink underline="none" className="dark:text-neutral-500 dark:hover:text-white transition-transform duration-200 hover:translate-x-1">
        <a href={href}>{label}</a>
      </HeroLink>
    );
  }

  return (
    <HeroLink underline="none" className="dark:text-neutral-500 dark:hover:text-white transition-transform duration-200 hover:translate-x-1">
      <Link href={href}>{label}</Link>
    </HeroLink>
  );
}
