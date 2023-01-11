import styled from 'styled-components';
import { ButtonContainer } from '../components/button/Button.styled';
import { boxShadow, device, variables } from '../styles/globalStyle';

export const SingleCocktailContainerSection = styled.section`
  margin-top: 5rem;
`;

export const SingleCocktailContainer = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  box-shadow: ${boxShadow(variables.black)};
  border-radius: 1rem;
  grid-gap: 1rem;

  @media screen and (min-width: ${device.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
    height: min-content;
  }
`;

export const SingleCocktailDescription = styled.div`
  padding: 1rem;
  align-self: flex-end;
  span {
    color: ${variables.orangered};
    font-weight: bold;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

export const SingleCocktailImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  @media screen and (min-width: ${device.tablet}) {
    max-height: 30rem;
  }
`;

export const FavIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;

    &:hover {
      fill: ${variables.orange};
    }
  }
`;

export const ReturnIcon = styled.div`
  display: flex;

  margin: 1rem 0;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  grid-gap: 0;
  color: ${variables.white};
  border: solid 0.05rem ${variables.orangered};
  padding: 0.3rem;
  border-radius: 0.5rem;
  transition: all 0.3s linear;

  &:hover {
    color: ${variables.orangered};
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  p {
    padding-left: 0.5rem;
    margin: 0;
  }
`;

export const AddRemoveContainer = styled.div`
  display: grid;

  grid-gap: 0.5rem;

  align-items: center;

  @media screen and (min-width: ${device.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(2rem, max-content));
    justify-content: flex-start;
  }
`;

export const AddButtonContainer = styled(ButtonContainer)`
  border: 0.1rem solid ${variables.green};
  color: ${variables.white};

  &:hover {
    color: ${variables.white};
    border: 0.1rem solid ${variables.lightgreen};
  }
`;
