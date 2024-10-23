import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color,maxWidth, children, onClick }: ButtonProps) => (
  <StyledButton color={color} maxWidth= {maxWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
