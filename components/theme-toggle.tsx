"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "piqi-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="3.75" />
      <path d="M10 1.5v2.25" />
      <path d="M10 16.25v2.25" />
      <path d="M3.5 3.5l1.6 1.6" />
      <path d="M14.9 14.9l1.6 1.6" />
      <path d="M1.5 10h2.25" />
      <path d="M16.25 10h2.25" />
      <path d="M3.5 16.5l1.6-1.6" />
      <path d="M14.9 5.1l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M13.8 2.8a7.4 7.4 0 1 0 3.4 11.6A6.1 6.1 0 0 1 13.8 2.8Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = stored === "dark" || stored === "light" ? stored : getSystemTheme();

    setTheme(initial);
    applyTheme(initial);
  }, []);

  function handleToggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
      <span className="theme-toggle-text">{mounted ? (theme === "dark" ? "Light" : "Dark") : "Theme"}</span>
    </button>
  );
}
