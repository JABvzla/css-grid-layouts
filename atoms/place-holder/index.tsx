import styled from "styled-components";

export interface PlaceHolderProps {
  children?: JSX.Element | JSX.Element[];
  width: number;
  height: number;
  round?: string;
}

export function PlaceHolder(props: PlaceHolderProps): JSX.Element {
  return <StyledPlaceHolder {...props} />;
}

const StyledPlaceHolder = styled.div(
  ({ theme, width, height, round = "0px" }: Theme & PlaceHolderProps) => `
    width: ${theme.unit(width)};
    height: ${theme.unit(height)};
    background: linear-gradient(90deg, ${theme.placeholder.secondary} 0%, ${theme.placeholder.primary} 35%, ${theme.placeholder.secondary} 100%);
    background-repeat: repeat;
    animation: skeleton .8s infinite linear;
    border-radius: ${theme.round[round]};

    @keyframes skeleton {
      from { background-position: 0% 0px; } 
      to { background-position: ${theme.unit(width)} 0px; }
    }
  `
);
