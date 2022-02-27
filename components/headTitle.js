import Head from "next/head";

export default function HeadTitle({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Visit Bondowoso" />
      <meta name="theme-color" content="#16A34A" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#16A34A" />
      <link rel="icon" href="img/mountain.svg" />
    </Head>
  );
}
