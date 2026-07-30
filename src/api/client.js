export const fetchItems = async () => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data.results;
};