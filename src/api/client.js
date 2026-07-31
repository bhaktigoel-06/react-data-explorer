const BASE_URL = "https://rickandmortyapi.com/api/character";

const normalise = (item) => ({
  id: item.id,
  title: item.name,
  subtitle: item.species,
  image: item.image,
  status: item.status,
  gender: item.gender,

  // ✅ IMPORTANT (flat structure)
  origin: item.origin?.name || "Unknown",
  location: item.location?.name || "Unknown",

  created: item.created,
});

export const fetchItems = async (search, signal) => {
  const res = await fetch(`${BASE_URL}?name=${search}`, { signal });

  const data = await res.json();

  if (!res.ok || !data.results) {
    return [];
  }

  return data.results.map(normalise);
};