import { Outlet, useNavigate } from 'react-router-dom';
import { LogoIcon, NavBarContainer } from './NavBar.styles';
import NavItems from './NavItems';
import { navData } from '../../data/navData';
import { FaCocktail } from 'react-icons/fa';
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarContainer>
        <LogoIcon onClick={() => navigate('/')}>
          <FaCocktail />
        </LogoIcon>
        <NavItems data={navData} />
      </NavBarContainer>
      <Outlet />
    </>
  );
};
export default NavBar;
