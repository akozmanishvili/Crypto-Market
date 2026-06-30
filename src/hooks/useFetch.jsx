import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const controller = new AbortController();

    async function fetching() {
      try {
        const resp = await fetch(url, { signal: controller.signal });

        if (!resp.ok) throw new Error("Failed to fetch data");

        const js = await resp.json();
        setData(js);
      } catch (err) {
        if (err.name === "AbortError" || err.message?.includes("aborted")) {
          return;
        }

        console.error("Fetch error details:", err.message);
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetching();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
