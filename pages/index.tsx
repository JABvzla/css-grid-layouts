import Head from "next/head";
import { ReactNode } from "react";
import { PlaceHolder, Text } from "../atoms";

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PlaceHolder width={50} height={25} round={"sm"} />
        <button>boton</button>
        <Text
          keyText="title"
          size="md"
          weight="normal"
          variant="h1"
          color="primary"
        />
      </main>
      <footer></footer>
    </div>
  );
}
