"use client";

import React, { useState, useEffect } from "react";

const ThemeSwitcher: React.FC = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    // Set default theme or load from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save to localStorage
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm btn-outline">
        Theme: {currentTheme}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-60 overflow-y-auto"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <button
              className={`btn btn-ghost btn-sm ${
                currentTheme === theme ? "text-primary font-bold" : ""
              }`}
              onClick={() => handleThemeChange(theme)}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
