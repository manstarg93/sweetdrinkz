import { createContext, useReducer } from 'react';
import { useFetch } from '../hooks/useFetch';
import { actionTypes, appReducer, initialState } from './appReducer';

interface AppContextInterface {
  data: {
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
  } | null;
  isError: boolean;
  isLoading: boolean;
  searchText: string;
  setSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredCategory: string;
  setFilteredCategory: (value: string) => void;
  favourite: {
    idDrink: string;
    strAlcoholic: string;
    strDrinkThumb: string;
    strGlass: string;
    strDrink: string;
  }[];
  addToFavourite: (id: string) => void;
  removeFromFavourite: (id: string) => void;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }) => {
  const [{ searchText, filteredCategory, favourite }, dispatch] = useReducer(
    appReducer,
    initialState
  );
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

  const { data, isError, isLoading } = useFetch(url);

  const dispatchHandler = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  const setSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchHandler(actionTypes.setSearchText, e.target.value);
  };

  const setFilteredCategory = (value: string) => {
    dispatchHandler(actionTypes.setFilteredCategory, value);
  };

  const addToFavourite = (id: string) => {
    if (favourite.reduce((acc, curr) => curr.idDrink === id, '')) {
      return;
    }

    dispatchHandler(actionTypes.addToFavourite, [
      ...favourite,
      data.drinks.find((drink) => drink.idDrink === id),
    ]);
  };

  const removeFromFavourite = (id: string) => {
    dispatchHandler(
      actionTypes.removeFromFavourite,
      favourite.filter((drink) => drink.idDrink !== id)
    );
  };

  const value = {
    data,
    isError,
    isLoading,
    searchText,
    setSearchText,
    filteredCategory,
    setFilteredCategory,
    favourite,
    addToFavourite,
    removeFromFavourite,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
