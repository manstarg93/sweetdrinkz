import { createContext, useReducer } from 'react';
import { useFetch } from '../hooks/useFetch';
import { actionTypes, appReducer, initialState } from './appReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [{ searchText, filteredCategory, favourite }, dispatch] = useReducer(
    appReducer,
    initialState
  );

  const { data, isError, isLoading } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  );

  const dispatchHandler = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  const setSearchText = (e) => {
    dispatchHandler(actionTypes.setSearchText, e.target.value);
  };

  const setFilteredCategory = (value) => {
    dispatchHandler(actionTypes.setFilteredCategory, value);
  };

  const addToFavourite = (id) => {
    if (favourite.reduce((acc, curr) => curr.idDrink === id, '')) {
      return;
    }

    dispatchHandler(actionTypes.addToFavourite, [
      ...favourite,
      data.drinks.find((drink) => drink.idDrink === id),
    ]);
  };

  const removeFromFavourite = (id) => {
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
