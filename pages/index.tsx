import Head from "next/head";
import { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button>boton</button>
        hola :D
      </main>

      <footer></footer>
    </div>
  );
}
