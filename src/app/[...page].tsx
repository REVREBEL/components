// pages/[...page].tsx
import { builder, BuilderComponent } from '@builder.io/react';

// Only need to call builder.init once, and use the actual env var
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

import type { GetStaticProps, GetStaticPaths } from 'next';

interface CatchAllPageProps {
  content: any; // You can replace 'any' with a more specific type if you know it
}

const CatchAllPage = ({ content }: CatchAllPageProps) => {
  return <BuilderComponent model="page" content={content} />;
};

export default CatchAllPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlPath = '/' + (params?.page ? (Array.isArray(params.page) ? params.page.join('/') : params.page) : '');
  const content = await builder.get('page', { url: urlPath }).promise();

  return {
    props: { content: content || null },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};