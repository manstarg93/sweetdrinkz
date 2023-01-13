import Grid from '../../components/gridUi/Grid';
import { useAppContext } from '../../hooks/useAppContext';
import Cocktail from './Cocktail';

const Cocktails = () => {
  const { data, isLoading, isError, filteredCategory } = useAppContext();

  return (
    <>
      {isLoading && <h3 className="center">loading...</h3>}
      {isError && <h3 className="center">Unable to retrieve Data.</h3>}
      <Grid>
        {filteredCategory === 'all'
          ? data?.drinks?.map((drink) => {
              return <Cocktail key={drink.idDrink} {...drink} />;
            }) ?? <h3>No drinks matches result</h3>
          : data?.drinks
              ?.filter(
                (drinkCategory) =>
                  drinkCategory.strAlcoholic.toLowerCase() ===
                  filteredCategory.toLowerCase()
              )
              .map((drink) => {
                return <Cocktail key={drink.idDrink} {...drink} />;
              }) ?? <h3 className="center">No drinks matches result</h3>}
      </Grid>
    </>
  );
};
export default Cocktails;
