import styled from 'styled-components';
import { variables } from '../styles/globalStyle';

export const CocktailFilterContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(1rem, max-content));
  grid-gap: 1rem;
  align-items: center;

  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
`;

export const FilterButtonContailer = styled.div`
  button {
    color: ${(props) =>
      props.isActive ? variables.orangered : variables.white};
  }
`;
