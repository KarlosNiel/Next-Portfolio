"use client";

import { useTheme } from "@/lib/hooks/useTheme";
import { Button } from "@heroui/react";
import { SunIcon } from "@/components/ui/sun";
import { MoonIcon } from "@/components/ui/moon";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

  }, []);

  if (!mounted) {
    return null
  } 

  return (
    <Button
      onPress={toggleTheme}
      aria-label="Alternar tema"
      className="bg-transparent rounded-lg data-[pressed=true]:bg-neutral-900 hover:bg-neutral-100 hover:text-black transition-colors duration-300 "
    >
      {theme === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon />  
      )}
    </Button>
  );
}
