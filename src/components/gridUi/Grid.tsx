import { GridContainer } from './Grid.styles';

type gridType = {
  children: React.ReactNode;
};

const Grid = ({ children }: gridType) => {
  return <GridContainer>{children}</GridContainer>;
};
export default Grid;
