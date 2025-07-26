// pages/[...page].tsx
import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
builder.init('NEXT_PUBLIC_BUILDER_API_KEY');

export default function CatchAllPage({ content }) {
  return <BuilderComponent model="page" content={content} />;
}

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  const content = await builder.get('page', { url: urlPath }).promise();

  return {
    props: { content: content || null },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
