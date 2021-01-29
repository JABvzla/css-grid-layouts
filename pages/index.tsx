import Head from "next/head";
import { ReactNode } from "react";
import { PlaceHolder } from "../atoms";
import { BasicLayout } from "../templates/basic-layout";

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout
        header={<PlaceHolder height={10} />}
        content={<PlaceHolder height={200} />}
        footer={<PlaceHolder height={50} />}
      />
    </div>
  );
}
