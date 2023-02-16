import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setData(response.data);
    }

    fetchData();
  }, [url]);

  return [data];
}

export default useFetchData;
