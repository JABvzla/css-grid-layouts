import Head from "next/head";
import { ReactNode } from "react";
import { Card, PlaceHolder, Text } from "../atoms";

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: "flex", flexWrap: "wrap" }}>
        <Card>
          <PlaceHolder width={50} height={25} round={"sm"} />

          <Text
            keyText="title"
            size="md"
            weight="normal"
            variant="span"
            color="primary"
          />
        </Card>
        <Card>
          <PlaceHolder width={50} height={25} round={"sm"} />

          <Text
            keyText="title"
            size="md"
            weight="normal"
            variant="span"
            color="primary"
            align="center"
          />
        </Card>
        <Card>
          <PlaceHolder width={50} height={25} round={"sm"} />

          <Text
            keyText="title"
            size="md"
            weight="normal"
            variant="span"
            color="primary"
          />
        </Card>
      </main>
      <footer></footer>
    </div>
  );
}
