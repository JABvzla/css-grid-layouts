export const css = `
  grid-template-areas:
    'header header header header'
    'menu main main  main'
    'menu footer footer footer';

  grid-template-rows: 1fr 5fr 1fr;

  & header { grid-area: header; }
  & nav  { grid-area: menu; }
  & main { grid-area: main; }
  & footer { grid-area: footer; }
`;

export const html = `
  <header>HEADER</header>
  <nav>MENU</nav>
  <main>CONTENT</main>
  <footer>FOOTER</footer>
`;
