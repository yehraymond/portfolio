import { Switch } from "@nextui-org/switch";
import { useEffect, useState } from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

export default function DarkModeBtn() {
  const [isDarkMode, toggleDarkMode] = useState<Boolean | null>(null);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toggleDarkMode(true);
    } else {
      toggleDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode === null) {
      return;
    }

    if (isDarkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-center my-2 md:my-auto">
      <Switch
        size="lg"
        isSelected={!isDarkMode}
        onChange={() => toggleDarkMode(!isDarkMode)}
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        className="ml-2"
      />
    </div>
  );
}
