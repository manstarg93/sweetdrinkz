import styled from 'styled-components';
import { boxShadow, device, variables } from '../../styles/globalStyle';

export const CocktailContainer = styled.article`
  position: relative;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s linear;

  @media screen and (min-width: ${device.tablet}) {
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: ${boxShadow(variables.black)};
    border-radius: 1rem;
    filter: brightness(80%);
    transition: all 0.5s linear;
    &:hover {
      transform: scale(1.1);
    }

    @media screen and (min-width: ${device.tablet}) {
      max-height: 25rem;
    }
  }
`;

export const CocktailFooterContainer = styled.div`
  position: absolute;
  left: 0;
  padding: 1rem;
  bottom: 0;
  display: grid;
  grid-gap: 0.5rem;

  h3 {
    padding: 0;
    margin: 0;
  }

  h4 {
    padding: 0;
    margin: 0;
  }
`;
