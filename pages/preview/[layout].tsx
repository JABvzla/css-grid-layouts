import Head from "next/head";
import { ReactNode } from "react";
import { LayoutViewer } from "../../templates/layout-viewer";
import { useRouter } from "next/router";
import * as Layouts from "../../layouts";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Preview(): ReactNode {
  const router = useRouter();
  const { layout } = router.query;

  return (
    <>
      <Head>
        <title>Layout Preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutViewer layoutName={layout as string} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: Object.keys(Layouts).map(layout => ({ params: { layout }})),
    fallback: false
  };

}

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {}}
}