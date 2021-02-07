import styled from "styled-components";
import { Highlight, Text } from "../../atoms";
import { codeDisclaimer } from "./code-disclaimer";

export interface DisclaimerProps {}

export function Disclaimer(props: DisclaimerProps): JSX.Element {
  return (
    <StyledDisclaimer>
      <Text
        weight="bold"
        color="secondary"
        variant="h1"
        size="xlg"
        keyText={"disclaimer_title"}
        align="center"
      />
      <Text
        weight="normal"
        color="secondary"
        variant="h1"
        size="md"
        keyText={"disclaimer_content"}
      />
      <Highlight code={codeDisclaimer} language="scss" />
    </StyledDisclaimer>
  );
}

const StyledDisclaimer = styled.div<Theme & DisclaimerProps>(
  ({ theme }) => `
    text-align: left;
    padding: ${theme.unit(4)}
  `
);
