import { useNavigate } from 'react-router-dom';
import { CocktailContainer, CocktailFooterContainer } from './Cocktail.styles';

type CocktailProps = {
  idDrink: string;
  strGlass: string;
  strDrink: string;
  strDrinkThumb: string;
};

const Cocktail = ({
  idDrink,
  strGlass,
  strDrink,
  strDrinkThumb,
}: CocktailProps) => {
  const navigate = useNavigate();
  return (
    <CocktailContainer onClick={() => navigate(`/${idDrink}`)}>
      <img src={strDrinkThumb} alt={strDrink} />
      <CocktailFooterContainer>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
      </CocktailFooterContainer>
    </CocktailContainer>
  );
};
export default Cocktail;
