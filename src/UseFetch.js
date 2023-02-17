import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        setData(response.data);
        setIsPending(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Fetch cancelled");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      }
    };

    fetchData();

    return () => {
      source.cancel("Component unmounted or fetch cancelled");
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
