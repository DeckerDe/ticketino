"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon
          className="
                h-4 w-4 rotate-0 scale-100 transition-all
                dark:-rotate-90 dark:scale-0
            "
        />

        <MoonIcon
          className="
                absolute h-4 w-4 rotate-90 scale-0 transition-all
                dark:rotate-0 dark:scale-100
"
        />
      </Button>

      <span className="sr-only">Toggle Theme </span>
    </div>
  );
};

export { ThemeSwitcher };
