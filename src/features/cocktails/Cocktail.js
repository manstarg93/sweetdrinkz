import { useNavigate } from 'react-router-dom';
import { CocktailContainer, CocktailFooterContainer } from './Cocktail.styles';

const Cocktail = ({ idDrink, strGlass, strDrink, strDrinkThumb }) => {
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
