import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Card, Grid, Text } from "../atoms";
import * as Layouts from "../layouts";
import { CodePreview } from "../molecules/code-preview";
import { Disclaimer } from "../molecules/disclaimer";
import { LayoutViewer } from "../templates/layout-viewer";

export default function Home(): ReactNode {
  const [selectedLayout, setSelectedLayout] = useState(null);
  const onSelect = (newSelection) => () => {
    selectedLayout === newSelection
      ? setSelectedLayout(null)
      : setSelectedLayout(newSelection);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain visible={!!selectedLayout}>
        <div>
          <Text
            weight="bold"
            color="secondary"
            variant="h1"
            size="xxlg"
            keyText={"CSS-GRID"}
            align="center"
          />

          <Disclaimer />

          <Text
            weight="bold"
            color="secondary"
            variant="h1"
            size="xxlg"
            keyText={"layout"}
            align="center"
          />
          <Grid>
            {Object.keys(Layouts).map((e, i) => (
              <Card
                onClick={onSelect(e)}
                key={i}
                className={e === selectedLayout && "selected"}
              >
                <LayoutViewer layoutName={e} isThumbnail />
              </Card>
            ))}
          </Grid>
        </div>

        <div>
          <div className="close" onClick={() => setSelectedLayout(null)}>
            X
          </div>
          <CodePreview
            link={`preview/${selectedLayout}`}
            scss={Layouts[selectedLayout]?.css || ""}
            html={Layouts[selectedLayout]?.html || ""}
          />
        </div>
      </StyledMain>
    </>
  );
}

interface StyledMainProps {
  visible: boolean;
}

const StyledMain = styled.main<Theme & StyledMainProps>(
  ({ theme, visible }) => `
  display: flex;

  height: 100vh;
  & > div:nth-child(1) {
    flex: 1;
    text-align: center;
    overflow: scroll;
    background: ${theme.background.colors.secondary};
  }
  & > div:nth-child(2) {
    max-width: 100%;
    & > .close {
      display: none;
      ${theme.onMobile(`
        color: #fff;
        padding: 10px;
        display: flex;
      `)}
    }

    background: ${theme.background.colors.primary};
    flex: 1;
    overflow: scroll;
    
    & > * {
      opacity: 1;
      ${!visible && `opacity: 0;`}
    }
    
    
    ${theme.onMobile(`
      position: fixed;
      min-width: 100vw;
      min-height: 100vh;
      ${!visible && `display: none;`}
    
    `)}
  }
`
);

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
