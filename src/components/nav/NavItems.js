import {
  NavItemContainer,
  NavItemLink,
  NavItemsContainer,
} from './NavItems.styles';

const NavItems = ({ data }) => {
  return (
    <NavItemsContainer>
      {data.map((nav) => {
        const { category, link } = nav;
        return (
          <NavItemContainer key={category}>
            <NavItemLink to={link}>{category}</NavItemLink>
          </NavItemContainer>
        );
      })}
    </NavItemsContainer>
  );
};
export default NavItems;
