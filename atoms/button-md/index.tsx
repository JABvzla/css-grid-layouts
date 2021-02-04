import styled from "styled-components";
import { Text } from "../text";

export interface ButtonMDProps {
  text: string;
  onClick?: () => void;
}

export function ButtonMD(props: ButtonMDProps): JSX.Element {
  return (
    <StyledButtonMD {...props}>
      <Text variant="span" keyText="preview" color="primary" size="sm" weight="bold" />
    </StyledButtonMD>
  );
}

const StyledButtonMD = styled.div(
  ({ theme }: Theme & ButtonMDProps) => `
    padding: ${theme.unit(0.8)} ${theme.unit(2)} ${theme.unit(1.3)};
    background: rgba(250, 250, 250, .1);
    transition: all .3s;
    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.1);

    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 10px;

    :hover {
      box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.1);
      background: rgba(250, 250, 250, .2);
    }  
  `
);
