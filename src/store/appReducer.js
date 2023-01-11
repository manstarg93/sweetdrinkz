export const initialState = {
  searchText: '',
  filteredCategory: 'all',
  favourite: [],
};

export const appReducer = (state, action) => {
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

export const actionTypes = {
  setSearchText: 'SEARCH_TEXT',
  setFilteredCategory: 'SET_FILTERED_CATEGORY',
  addToFavourite: 'ADD_TO_FAVOURITE',
  removeFromFavourite: 'REMOVE_FROM_FAVOURITE',
};
