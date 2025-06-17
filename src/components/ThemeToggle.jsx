import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./ThemeToggle.css"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === "light" ? "🌙 " : "☀️ "}
    </button>
  );
};

export default ThemeToggle;
