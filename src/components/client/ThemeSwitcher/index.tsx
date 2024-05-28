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
      <button className="p-1 px-2 rounded-md  bg-slate-500 animate-pulse w-14 h-11" />
    );

  return (
    <>
      {theme === "dark" ? (
        <button
          className="p-1 px-2 rounded-md flex justify-center items-center border-2 border-slate-500"
          onClick={() => setTheme("light")}
        >
          <GoSun size={35} />
        </button>
      ) : (
        <button
          className="p-1 px-2 rounded-md flex justify-center items-center border-2 border-slate-500"
          onClick={() => setTheme("dark")}
        >
          <WiMoonAltWaxingCrescent4 size={35} />
        </button>
      )}
    </>
  );
}
