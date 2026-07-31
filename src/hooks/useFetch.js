import { useState, useEffect } from "react";
import { fetchItems } from "../api/client";

export const useFetch = (search) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetchItems(search, controller.signal)
      .then((res) => {
        console.log("DATA:", res); // 👈 debug
        setData(res);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [search]);

  return { data, loading, error };
};