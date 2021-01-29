import styled from "styled-components";

export interface PlaceHolderProps {
  children?: JSX.Element | JSX.Element[];
  height: number;
  width?: number;
  round?: string;
}

export function PlaceHolder(props: PlaceHolderProps): JSX.Element {
  return <StyledPlaceHolder {...props} />;
}

const StyledPlaceHolder = styled.div(
  ({ theme, width, height, round = "0px" }: Theme & PlaceHolderProps) => `
    position: relative;
    width: ${theme.unit(width)};
    height: ${theme.unit(height)};

    background: linear-gradient(90deg, ${theme.placeholder.secondary} 0%, ${theme.placeholder.primary} 35%, ${theme.placeholder.secondary} 100%);
    background: ${theme.placeholder.primary};
    background-repeat: repeat;
    border-radius: ${theme.round[round]};
    overflow: hidden;

    &:after {
      content: " ";
      width: 80%;
      height: 100%;
      background: #f00;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(90deg, transparent 0%, ${theme.placeholder.secondary} 50%, transparent 100%);
      animation: skeleton 2s infinite linear;
    }

    @keyframes skeleton {
      from { left: -100%; } 
      to { left: 100%; } 
    }
  `
);
