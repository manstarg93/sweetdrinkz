import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { variables } from '../../styles/globalStyle';

export const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavItemContainer = styled.li`
  padding: 0 0.5rem;
`;

export const NavItemLink = styled(NavLink)`
  color: ${variables.white};
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;

  transition: all 0.3s linear;
  &:hover {
    color: ${variables.orange};
  }
  &.active {
    color: ${variables.white};
    background-color: ${variables.orangered};
  }
`;
