import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [url]);

  return [data];
}

export default useFetchData;

