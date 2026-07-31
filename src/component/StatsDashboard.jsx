export default function StatsDashboard({ stats }) {
  return (
    <div>
      <h3>Stats</h3>
      <p>Total: {stats.total}</p>
      <p>Alive: {stats.alive}</p>
      <p>Dead: {stats.dead}</p>
      <p>Unknown: {stats.unknown}</p>
    </div>
  );
}