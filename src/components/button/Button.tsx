import { ButtonContainer } from './Button.styled';

type ButtonProps = {
  isActive: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick, isActive }: ButtonProps) => {
  return (
    <ButtonContainer isActive={isActive} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
export default Button;
