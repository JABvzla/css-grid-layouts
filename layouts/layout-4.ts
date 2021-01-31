export const css = `
  grid-template-areas:
    'header   header   header   header    header  header'
    'logo     logo     _blank   _blank    contact contact'
    'logo     logo     nav      nav       nav     nav'
    'sideshow sideshow sideshow sideshow  sidebar sidebar'
    'main     main     main     main      sidebar sidebar'
    'footer   footer   footer   footer    footer  footer';

  grid-template-rows: 1.5fr 1fr 1fr 2fr 5fr 2fr;

  & header { grid-area: header; }
  & :nth-child(2) { grid-area: logo; }
  & :nth-child(3) { grid-area: contact; }
  & nav { grid-area: nav; }
  & :nth-child(5) { grid-area: sideshow; }
  & :nth-child(6) { grid-area: sidebar; }
  & main { grid-area: main; }
  & footer { grid-area: footer; }
`;

export const html = `
  <header>HEADER</header>
  <div>LOGO</div>
  <div>CONTACT</div>
  <nav>MENU</nav>
  <div>SIDESHOW</div>
  <div>SIDEBAR</div>
  <main>CONTENT</main>
  <footer>FOOTER</footer>
`;
