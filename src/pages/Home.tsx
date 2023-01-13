import Search from '../components/search/Search';
import CocktailFilter from '../features/cocktails/CocktailFilter';
import Cocktails from '../features/cocktails/Cocktails';

import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <Search />
      <CocktailFilter />
      <Cocktails />
    </HomeContainer>
  );
};
export default Home;
