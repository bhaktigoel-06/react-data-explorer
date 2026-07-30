export const fetchItems = async (search, signal) => {
  const url = search
    ? `https://rickandmortyapi.com/api/character/?name=${search}`
    : `https://rickandmortyapi.com/api/character`;

  const res = await fetch(url, { signal });

  if (res.status === 404) {
    return []; // blank screen fix
  }

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data.results;
};