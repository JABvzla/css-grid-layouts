import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
import { Card, Text } from "../atoms";
import * as Layouts from "../layouts";
import { LayoutViewer } from "../templates/layout-viewer";
import Link from "next/link";

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Text variant="h1" size="xxlg"  keyText="Layouts" align="center" />
      <StyledGrid>
        {Object.keys(Layouts).map((e, i) => (
          <Link href={`preview/${e}`} key={i}>
            <Card>
              <LayoutViewer layoutName={e} isThumbnail />
            </Card>
          </Link>
        ))}
      </StyledGrid>
    </div>
  );
}

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: auto;
  & > * {
    background: #fff;
    transition: all 0.1s ease-in;
    position: relative;
    text-align: center;
    width: 200px;
    height: 250px;
    cursor: pointer;
  }
  & > *:hover {
    transform: scale(1.05);
  }
`;
