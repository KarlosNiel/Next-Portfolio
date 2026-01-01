"use client"

import { Menu } from "lucide-react";
import { Button, Dropdown } from "@heroui/react";
import { NavLink } from "@/components/atoms/links/NavLink";
import { NavigationProps } from "@/lib/types/types";


export function MobileNavigation({ navLinks }: NavigationProps) {
    return (
    <Dropdown>
      <Button
        aria-label="Menu"
        className="bg-transparent rounded-lg data-[pressed=true]:bg-neutral-900 transition-colors duration-200"
      >
        <Menu className="size-5 text-black dark:text-white" />
      </Button>

      {/* Conteúdo */}
      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Mobile Navigation"
        >
          {navLinks.map(link => (
            <Dropdown.Item
              key={link.href}
              textValue={link.label}
            >
              <NavLink href={link.href} label={link.label} />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )      
}