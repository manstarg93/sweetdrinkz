import { IFavourite } from '../types/IFavourite';

export type AppContextInterface = {
  setSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
  setFilteredCategory: (value: string) => void;

  addToFavourite: (id: string) => void;
  removeFromFavourite: (id: string) => void;
  data: dataTypeInterface;
  favourite: IFavourite;
  isError: boolean;
  isLoading: boolean;
  filteredCategory: string;
};

export interface dataTypeInterface {
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

    strIngredient5: string;
  }[];
}
