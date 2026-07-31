import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {dark ? "☀ " : "🌙 "}
    </button>
  );
};

export default ThemeToggle;