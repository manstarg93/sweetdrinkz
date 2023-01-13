import { useNavigate, useParams } from 'react-router-dom';
import { ButtonContainer } from '../components/button/Button.styled';
import { useAppContext } from '../hooks/useAppContext';
import { AiOutlineHeart, AiOutlineArrowLeft } from 'react-icons/ai';

import {
  AddButtonContainer,
  AddRemoveContainer,
  FavIcon,
  ReturnIcon,
  SingleCocktailContainer,
  SingleCocktailContainerSection,
  SingleCocktailDescription,
  SingleCocktailImg,
} from './SingleCocktail.styles';
import Button from '../components/button/Button';

const SingleCocktail = () => {
  const { singleCocktail } = useParams();
  const { data, addToFavourite, favourite, removeFromFavourite } =
    useAppContext();

  const navigate = useNavigate();
  const addToFavouriteHandler = (id) => {
    addToFavourite(id);
  };

  const removeDrinkHandler = (id) => {
    removeFromFavourite(id);
    navigate(-1);
  };
  return (
    <>
      {data.drinks
        ?.filter((drink) => drink.idDrink === singleCocktail)
        .map((drink) => {
          const {
            idDrink,
            strAlcoholic,
            strDrinkThumb,
            strGlass,
            strDrink,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,

            strIngredient5,
          } = drink;

          const ing = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ].join(', ');

          return (
            <SingleCocktailContainerSection key={idDrink}>
              <ReturnIcon>
                <AiOutlineArrowLeft />
                <p onClick={() => navigate(-1)}> Go Back</p>
              </ReturnIcon>

              <SingleCocktailContainer>
                <FavIcon onClick={() => addToFavouriteHandler(idDrink)}>
                  <AiOutlineHeart />
                </FavIcon>
                <SingleCocktailImg src={strDrinkThumb} alt={strDrink} />
                <SingleCocktailDescription>
                  <h2> {strDrink}</h2>
                  <h3>
                    {' '}
                    <span>Category: </span> {strAlcoholic}
                  </h3>
                  <h4>
                    {' '}
                    <span>Glass: </span> {strGlass}
                  </h4>
                  <p>
                    {' '}
                    <span>Ingredients: </span>
                    {ing}
                  </p>
                  <p>
                    {' '}
                    <span>Instructions: </span>
                    {strInstructions}
                  </p>
                  <AddRemoveContainer>
                    <AddButtonContainer
                      isActive={false}
                      onClick={() => addToFavouriteHandler(idDrink)}
                    >
                      {' '}
                      Add to favourite
                    </AddButtonContainer>
                    {favourite.find((dri) => dri.idDrink === idDrink) && (
                      <Button
                        onClick={() => removeDrinkHandler(idDrink)}
                        isActive={false}
                      >
                        {' '}
                        remove drink
                      </Button>
                    )}
                  </AddRemoveContainer>
                </SingleCocktailDescription>
              </SingleCocktailContainer>
            </SingleCocktailContainerSection>
          );
        })}
    </>
  );
};
export default SingleCocktail;
