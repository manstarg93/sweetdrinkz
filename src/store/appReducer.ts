import { IFavourite } from '../types/IFavourite';

export type IDrinkState = {
  favourite: IFavourite;
  searchText: string;
  filteredCategory: string;
};

export const initialState: IDrinkState = {
  favourite: [],
  searchText: '',
  filteredCategory: 'all',
};

export enum actionTypes {
  setSearchText = 'SEARCH_TEXT',
  setFilteredCategory = 'SET_FILTERED_CATEGORY',
  addToFavourite = 'ADD_TO_FAVOURITE',
  removeFromFavourite = 'REMOVE_FROM_FAVOURITE',
}

type ACTIONTYPE =
  | { type: actionTypes.setSearchText; payload: string }
  | { type: actionTypes.addToFavourite; payload: IFavourite }
  | { type: actionTypes.removeFromFavourite; payload: IFavourite }
  | { type: actionTypes.setFilteredCategory; payload: string };

export const appReducer = (
  state: IDrinkState,
  action: ACTIONTYPE
): IDrinkState => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.setSearchText:
      return {
        ...state,
        searchText: payload,
      };
    case actionTypes.setFilteredCategory:
      return {
        ...state,
        filteredCategory: payload,
      };
    case actionTypes.addToFavourite:
      return {
        ...state,
        favourite: payload,
      };
    case actionTypes.removeFromFavourite:
      return {
        ...state,
        favourite: payload,
      };

    default:
      return state;
  }
};
