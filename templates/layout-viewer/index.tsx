import styled, { ThemeProvider } from "styled-components";
import * as Layouts from "../../layouts";
import { theme } from "../../styles/default-theme";

export interface LayoutViewerProps {
  children?: JSX.Element | JSX.Element[];
  layoutName: string;
  isThumbnail?: boolean;
}

export function LayoutViewer(props: LayoutViewerProps): JSX.Element {
  const layout = Layouts[props.layoutName] || Layouts.layout1;

  return (
      <StyledLayout
        children={props.children}
        layout={layout.css}
        isThumbnail={props.isThumbnail}
        dangerouslySetInnerHTML={{ __html: layout.html }}
      />
  );
}

interface StyledLayoutProps {
  layout: string;
  isThumbnail?: boolean;
}
 
const StyledLayout = styled.div<Theme & StyledLayoutProps>(
  ({ layout, isThumbnail}) => `
  ${layout};
  display: grid;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: ${theme.unit(3)};
  grid-gap: ${theme.unit(3)};
  background-color: ${theme.background.colors.secondary};
  color: ${theme.text.colors.primary};
  & * {
    background-color: ${theme.background.colors.primary};
    display: flex; 
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  ${isThumbnail && `
    min-height: 100%;
    padding: ${theme.unit(1)};
    grid-gap: ${theme.unit(1)};
    font-size: .7rem;
  
  `}


`
);
