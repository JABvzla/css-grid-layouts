import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles/default-theme";

export interface BasicLayoutProps {
  header: JSX.Element | JSX.Element[];
  content: JSX.Element | JSX.Element[];
  footer: JSX.Element | JSX.Element[];
}

export function BasicLayout(props: BasicLayoutProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <div className="header">
          {props.header}
        </div>

        <div className="content">
          {props.content}
        </div>

        
      </StyledMain>
      <StyledFooter>
          {props.footer}

      </StyledFooter>
    </ThemeProvider>
  );
}


const StyledFooter = styled.div(
  ({ theme }: Theme & BasicLayoutProps) => `
    padding: ${theme.unit(10)};
    background-color: ${theme.background.colors.primary}
  `
);


const StyledMain = styled.div(
  ({ theme }: Theme & BasicLayoutProps) => `
    padding: ${theme.unit(10)};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    & .header {
      height: 100px;
      width: 100%;
    }

    & .content {
      flex: 1;
      margin-top: ${theme.unit(10)};
      margin-bottom: ${theme.unit(1)};
      width: 100%;
    }
  `
);
