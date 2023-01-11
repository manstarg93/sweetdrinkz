import styled from 'styled-components';
import { boxShadow, variables } from '../../styles/globalStyle';

export const NavBarContainer = styled.nav`
  min-height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${variables.primary};
  box-shadow: ${boxShadow(variables.darkGray)};
`;

export const LogoIcon = styled.div`
  box-shadow: ${boxShadow(variables.primary)};
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  svg {
    fill: ${variables.orangered};
    width: 2.5rem;
    height: 2.5rem;
  }
`;
