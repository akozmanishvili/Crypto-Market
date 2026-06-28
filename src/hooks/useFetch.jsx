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
        const js = resp.json();
        setData(js);
      } catch (err) {
        if (err.message === "AbortError") return;
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetching();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
