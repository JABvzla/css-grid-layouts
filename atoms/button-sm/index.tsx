import styled from "styled-components";
import { Text } from "../text";

export interface ButtonSMProps {
  text: string;
  onClick: () => void;
}

export function ButtonSM(props: ButtonSMProps): JSX.Element {
  return (
    <StyledButtonSM {...props}>
      <Text weight="normal" keyText={props.text} color="primary" size="sm" />
    </StyledButtonSM>
  );
}

const StyledButtonSM = styled.div<Theme & ButtonSMProps>(({ theme }) => `
    display: inline-block;
    cursor: pointer;
    background: rgba(250, 250, 250, .1);
    padding: ${theme.unit(0.8)} ${theme.unit(2)} ${theme.unit(1.3)};
    border-radius: ${theme.unit(1)};
    :hover {
      background: rgba(250, 250, 250, .2);
    }  
  `
);
