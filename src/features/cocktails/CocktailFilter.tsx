import { cocktailNav } from '../../data/cocktailNavData';
import { useAppContext } from '../../hooks/useAppContext';
import {
  CocktailFilterContainer,
  FilterButtonContainer,
} from './CocktailFilter.styles';
const CocktailFilter = () => {
  const { filteredCategory, setFilteredCategory } = useAppContext();
  return (
    <CocktailFilterContainer>
      {cocktailNav.map((filt) => {
        const { category } = filt;

        return (
          <FilterButtonContainer
            key={category}
            isActive={filteredCategory === category}
            onClick={() => setFilteredCategory(category)}
          >
            {category}
          </FilterButtonContainer>
        );
      })}
    </CocktailFilterContainer>
  );
};
export default CocktailFilter;
