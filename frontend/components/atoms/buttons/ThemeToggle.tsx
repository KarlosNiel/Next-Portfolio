"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";
import { Button } from "@heroui/react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="bg-transparent rounded-lg data-[pressed=true]:bg-neutral-900 hover:bg-neutral-900 transition-colors duration-200 text-neutral-500 hover:text-white"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </Button>
  );
}
