import styled from 'styled-components';
import { device, variables } from '../../styles/globalStyle';

export const SearchContainer = styled.form`
  margin: 0 auto;
  margin-top: 3rem;
  width: 60%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
  padding: 0.7rem;
  border-bottom: solid 0.05rem ${variables.gray};
  @media screen and (min-width: ${device.tablet}) {
    min-width: 35rem;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${variables.gray};
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;

  background-color: inherit;
  width: 100%;
  color: ${variables.gray};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;
