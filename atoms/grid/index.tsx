import styled from 'styled-components';

export interface GridProps {
  children?: JSX.Element | JSX.Element[];
  
}

export function Grid(props: GridProps): JSX.Element {
  return (<StyledGrid {...props}  />)
}

const StyledGrid = styled.div(
  ({ theme }: Theme & GridProps) => `
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: auto;
  justify-content: center;
  & > * {
    background: rgba(250, 250, 250, 0.8);
    transition: all 0.1s ease-in;
    position: relative;
    text-align: center;
    width: 200px;
    height: 250px;
    cursor: pointer;
  }
  & > .selected {
    background: ${theme.background.colors.primary};
    transform: scale(1.05);
  }
  
  & > *:hover {
    background: ${theme.background.colors.primary};
    opacity: .9;
    transform: scale(1.05);
  }
`);
