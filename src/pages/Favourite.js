import Grid from '../components/gridUi/Grid';
import Cocktail from '../features/cocktails/Cocktail';
import { useAppContext } from '../hooks/useAppContext';

const Favourite = () => {
  const { favourite } = useAppContext();
  return (
    <section>
      <Grid>
        {favourite.length > 0 ? (
          favourite.map((drink) => {
            return <Cocktail key={drink.idDrink} {...drink} />;
          })
        ) : (
          <h3>No Favourite drink yet</h3>
        )}
      </Grid>
    </section>
  );
};
export default Favourite;
