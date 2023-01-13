import {
  NavItemContainer,
  NavItemLink,
  NavItemsContainer,
} from './NavItems.styles';

type NavItemsType = {
  data: { category: 'string'; link: 'string' }[];
};

const NavItems = ({ data }: NavItemsType) => {
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
