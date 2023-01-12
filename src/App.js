import './App.styles.js';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './pages/Home';
import { AppMain } from './App.styles.js';
import Favourite from './pages/Favourite.js';
import SingleCocktail from './pages/SingleCocktail.js';

function App() {
  return (
    <AppMain>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/:singleCocktail" element={<SingleCocktail />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route
            path="*"
            element={
              <div className="center">
                404 Error - Opps you've wandered too far
              </div>
            }
          />
        </Route>
      </Routes>
    </AppMain>
  );
}

export default App;
