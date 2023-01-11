import { ButtonContainer } from '../components/button/Button.styled';

import { cocktailNav } from '../data/cocktailNavData';
import { useAppContext } from '../hooks/useAppContext';
import {
  CocktailFilterContainer,
  FilterButtonContailer,
} from './CocktailFilter.styles';
const CocktailFilter = () => {
  const { filteredCategory, setFilteredCategory } = useAppContext();
  return (
    <CocktailFilterContainer>
      {cocktailNav.map((filt) => {
        const { category } = filt;

        return (
          <FilterButtonContailer
            key={category}
            isActive={filteredCategory === category}
          >
            <ButtonContainer onClick={() => setFilteredCategory(category)}>
              {category}
            </ButtonContainer>
          </FilterButtonContailer>
        );
      })}
    </CocktailFilterContainer>
  );
};
export default CocktailFilter;
