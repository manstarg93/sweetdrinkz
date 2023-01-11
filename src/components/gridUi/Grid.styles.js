import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  grid-template-rows: repeat(auto-fit, minmax(10rem, max-content));
  grid-gap: 2rem;
  grid-auto-rows: minmax(10rem, min-content);
  width: 100%;
  align-items: center;
  margin: 0 auto;
  margin-top: 5rem;
`;
