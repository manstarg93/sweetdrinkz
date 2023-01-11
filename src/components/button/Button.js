import { ButtonContainer } from './Button.styled';

const Button = ({ children, onClick, isActive, dd }) => {
  return (
    <ButtonContainer isActive={isActive} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
export default Button;
