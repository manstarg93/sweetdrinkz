import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { dataTypeInterface } from '../features/@types.cocktailTypes';

export const useFetch = (url: string) => {
  const [data, setData] = useState<dataTypeInterface>({
    drinks: [],
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    await axios(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    isError,
  };
};
