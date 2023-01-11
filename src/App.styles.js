import styled from 'styled-components';
import { variables } from './styles/globalStyle';

export const AppMain = styled.main`
  margin: 0;
  box-sizing: border-box;
  background-color: ${variables.primary};
  min-height: 100vh;

  min-width: 100vw;
  color: ${variables.white};
`;
