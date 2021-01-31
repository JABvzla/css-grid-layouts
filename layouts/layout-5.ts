export const css = `
  grid-template-areas:
    'logo   logo   header header header header'
    'image  image  image  image  image  image'
    'feat1  feat1  feat2  feat2  feat3  feat3'
    'nav    main   main   main   main   main'
    'footer footer footer footer footer footer';

  grid-template-rows: 1fr 4fr 2fr 6fr 3fr;

  & :nth-child(1) { grid-area: logo; }
  & header { grid-area: header; }
  & :nth-child(3) { grid-area: image; }
  & :nth-child(4) { grid-area: feat1; }
  & :nth-child(5) { grid-area: feat2; }
  & :nth-child(6) { grid-area: feat3; }
  & nav { grid-area: nav; }
  & main { grid-area: main; }
  & footer { grid-area: footer; }
`;

export const html = `
  <div>LOGO</div>
  <header>HEADER</header>
  <div>IMAGE</div>

  <div>FEAT 1</div>
  <div>FEAT 2</div>
  <div>FEAT 3</div>

  <nav>MENU</nav>
  <main>CONTENT</main>
  <footer>FOOTER</footer>
`;
