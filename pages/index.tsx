import Head from 'next/head';
import Script from 'next/script';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { GetStaticProps } from 'next';

type Props = { markup: string };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const source = readFileSync(join(process.cwd(), 'site-v2/index.html'), 'utf8');
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  if (!body) throw new Error('Could not find site markup');
  return { props: { markup: body } };
};

export default function Home({ markup }: Props) {
  return (
    <>
      <Head>
        <title>Varun Gangavarapu — Software Engineer at Amazon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#eee9d7" />
        <meta name="description" content="Varun Gangavarapu is a software development engineer at Amazon building optimization systems, data platforms, and thoughtful digital experiences." />
        <meta property="og:title" content="Varun Gangavarapu — Software Engineer at Amazon" />
        <meta property="og:description" content="Amazon engineering, digital twins, and vector search — selected work by Varun Gangavarapu." />
        <meta property="og:image" content="/assets/hero-goggles-poster.jpg" />
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/assets/hero-goggles.mp4" as="video" type="video/mp4" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/site-v2.js" strategy="afterInteractive" />
    </>
  );
}
