import Prism, { defaultProps, Language } from "prism-react-renderer";
import { createGlobalStyle } from "styled-components";
import { ButtonSM } from "../button-sm";

export interface HighlightProps {
    code: string;
    language: Language | "html"
}

export function Highlight(props: HighlightProps): JSX.Element {
  const onCopy = async () => {
    await navigator.clipboard.writeText(props.code)
  }
  return (
    <>
    <PrismStyled />
    <Prism {...defaultProps} code={props.code} language={props.language as Language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <ButtonSM onClick={onCopy} text="copy" />
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Prism>
    </>
  );
}

const PrismStyled = createGlobalStyle<Theme>`
  ${({ theme }) => `
    .prism-code {
      padding: ${theme.unit(5)};
      overflow-y: scroll;
    }
  `}
`;