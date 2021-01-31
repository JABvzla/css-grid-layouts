export const css = `
  grid-template-areas:
    'header header header'
    'sub-header sub-header sub-header'
    'main main right'
    'footer footer footer';

  grid-template-rows: 2fr 1fr 5fr 3fr;

  & header { grid-area: header; }
  & :nth-child(2) { grid-area: sub-header; }
  & main { grid-area: main; }
  & nav { grid-area: right; }
  & footer { grid-area: footer; }
`;

export const html = `
  <header>HEADER</header>
  <div>SUB-HEADER</div>
  <main>CONTENT</main>
  <nav>RIGHT</nav>
  <footer>FOOTER</footer>
`;
