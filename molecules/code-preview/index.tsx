import Link from "next/link";
import styled from "styled-components";
import { ButtonMD, Highlight } from "../../atoms";

export interface CodePreviewProps {
  children?: JSX.Element | JSX.Element[];
  link: string;
  html: string;
  scss: string;
}

export function CodePreview(props: CodePreviewProps): JSX.Element {
  return (
    <StyledCodePreview {...props}>
      <Link href={props.link}>
        <a target="_blank">
          <ButtonMD text="preview" />
        </a>
      </Link>
      <Highlight code={props.scss} language={"scss"} />
      <Highlight code={props.html} language={"html"} />
    </StyledCodePreview>
  );
}

const StyledCodePreview = styled.div(
  ({ theme }: Theme & CodePreviewProps) => `
  display:flex;
  padding: ${theme.unit(2.5)};
  padding-top: ${theme.unit(5)};
  z-index: 420;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;

  & > pre {
    width: 90%;
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.3);
  }

  & a {
    text-align: center;
    min-width:  ${theme.unit(40)};
  }
`
);
