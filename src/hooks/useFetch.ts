import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<{
    drinks: {
      idDrink: string;
      strAlcoholic: string;
      strDrinkThumb: string;
      strGlass: string;
      strDrink: string;
      strInstructions: string;
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;

      strIngredient5;
    }[];
  } | null>(null);

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
