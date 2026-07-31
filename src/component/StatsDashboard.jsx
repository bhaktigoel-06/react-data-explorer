import {useTheme} from "../context/ThemeContext";
export default function StatsDashboard({ stats }) {
  const { dark } = useTheme();

  return (
    <div className={`stats-dashboard ${dark ? "dark" : "light"}`}>
      <h3>Stats</h3>
      <p>Total: {stats.total}</p>
      <p>Alive: {stats.alive}</p>
      <p>Dead: {stats.dead}</p>
      <p>Unknown: {stats.unknown}</p>
    </div>
  );
}