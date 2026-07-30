export const fetchItems = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return data.results;
};