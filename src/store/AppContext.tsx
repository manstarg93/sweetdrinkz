import React, { createContext, useReducer } from 'react';
import { AppContextInterface } from '../features/@types.cocktailTypes';
import { useFetch } from '../hooks/useFetch';
import { actionTypes, appReducer, initialState } from './appReducer';

export const AppContext = createContext<AppContextInterface>({
  data: {
    drinks: [
      {
        idDrink: '',
        strAlcoholic: '',
        strDrinkThumb: '',
        strGlass: '',
        strDrink: '',
        strInstructions: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',

        strIngredient5: '',
      },
    ],
  },
  isError: true,
  isLoading: true,
  searchText: '',
  setSearchText: () => null,
  filteredCategory: 'all',
  setFilteredCategory: () => null,
  favourite: [
    {
      idDrink: '',
      strAlcoholic: '',
      strDrinkThumb: '',
      strGlass: '',
      strDrink: '',
    },
  ],
  addToFavourite: (id: string) => null,
  removeFromFavourite: (id: string) => null,
});

interface IAppProvider {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: IAppProvider) => {
  const [{ searchText, filteredCategory, favourite }, dispatch] = useReducer(
    appReducer,
    initialState
  );
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

  const { data, isError, isLoading } = useFetch(url);

  const dispatchHandler = (type: actionTypes, payload: any) => {
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
    if (favourite.some((drink) => drink.idDrink === id)) {
      return;
    }

    dispatchHandler(actionTypes.addToFavourite, [
      ...favourite,
      data?.drinks.find((drink) => drink.idDrink === id),
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
    children,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
