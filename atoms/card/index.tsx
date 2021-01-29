import styled from 'styled-components';

export interface CardProps {
  children?: JSX.Element | JSX.Element[];
  
}

export function Card(props: CardProps): JSX.Element {
  return (<StyledCard {...props}  />)
}

const StyledCard = styled.div(
  ({ theme }: Theme & CardProps) => `
    margin: 10px;
    width: fit-content;
    padding: ${theme.unit(2)};
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.2);
  `
);