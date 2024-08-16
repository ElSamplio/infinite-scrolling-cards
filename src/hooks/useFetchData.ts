import axios from "axios";
import { useEffect, useState } from "react";
import { Amiibo } from "../types/amiibo";

const useFetchData = (page: number, limit: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [amiiboData, setAmiiboData] = useState<Amiibo[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://my-amiibo-api.onrender.com", {
        params: { page, limit },
      })
      .then((amiiboResp) => {
        setAmiiboData(amiiboResp.data);
      })
      .catch((error) => {
        setError(error);
        setAmiiboData([]);
      })
      .finally(() => setLoading(false));
  }, [page, limit]);

  return { amiiboData, loading, error };
};

export default useFetchData;
