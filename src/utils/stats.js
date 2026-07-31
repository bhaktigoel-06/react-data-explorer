export const getStats = (data) => {
  if (!data || data.length === 0) {
    return {
      total: 0,
      alive: 0,
      dead: 0,
      unknown: 0
    };
  }

  const result = data.reduce(
    (acc, item) => {
      acc.total++;

      if (item.status === "Alive") acc.alive++;
      if (item.status === "Dead") acc.dead++;
      if (item.status === "unknown") acc.unknown++;
      return acc;
    },
    { total: 0, alive: 0, dead: 0, unknown: 0 }
  );

  return result;
};