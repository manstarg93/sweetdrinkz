import styled from 'styled-components';
import { variables } from '../../styles/globalStyle';

type ButonStyleProps = {
  isActive: boolean;
};

export const ButtonContainer = styled.button<ButonStyleProps>`
  font-size: 1.1rem;
  padding: 0.5rem;
  color: ${variables.white};
  border-radius: 0.3rem;

  border: solid 0.05rem ${variables.orangered};
  cursor: pointer;
  outline: none;
  transition: all 0.3s linear;
  background-color: inherit;
  text-transform: capitalize;

  text-align: center;

  &:hover {
    color: ${variables.orangered};
    /* background-color: ${variables.white}; */
  }
`;
