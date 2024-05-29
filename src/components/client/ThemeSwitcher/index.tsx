"use client";

import { useTheme } from "next-themes";
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { GoSun } from "react-icons/go";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="p-1 px-2 rounded-md  bg-light-100 dark:bg-dark-300 animate-pulse w-14 h-12" />
    );

  return (
    <>
      {theme === "dark" ? (
        <button
          className="p-1 px-2 rounded-md flex justify-center items-center border-2 border-dark-300"
          onClick={() => setTheme("light")}
        >
          <GoSun size={35} />
        </button>
      ) : (
        <button
          className="p-1 px-2 rounded-md flex justify-center items-center border-2 border-light-100"
          onClick={() => setTheme("dark")}
        >
          <WiMoonAltWaxingCrescent4 size={35} className="text-dark-300"/>
        </button>
      )}
    </>
  );
}
