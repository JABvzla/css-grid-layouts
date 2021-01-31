export const css = `
  grid-template-areas:
    'header header header header header'
    'left main main  main right'
    'footer footer footer footer footer';

  grid-template-rows: 1fr 5fr 1fr;

  & header { grid-area: header; }
  & main { grid-area: main; }
  & :nth-child(2) { grid-area: left; }
  & :nth-child(3) { grid-area: right; }
  & footer { grid-area: footer; }
`;

export const html = `
  <header>HEADER</header>
  <nav>LEFT</nav>
  <nav>RIGHT</nav>
  <main>CONTENT</main>
  <footer>FOOTER</footer>
`;
