import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Set theme on load based on localStorage value
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference in localStorage
  };

  return (
    <button className="" onClick={toggleTheme}>
      <input type="checkbox" className="toggle toggle-warning" defaultChecked />
    </button>
  );
}

export default ThemeToggle;