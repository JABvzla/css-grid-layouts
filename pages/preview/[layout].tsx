import Head from "next/head";
import { ReactNode } from "react";
import { LayoutViewer } from "../../templates/layout-viewer";
import { useRouter } from "next/router";


export default function Preview(): ReactNode {
  const router = useRouter();
  const { layout } = router.query;

  return (
    <>
      <Head>
        <title>Preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutViewer layoutName={layout as string} />
    </>
  );
}

