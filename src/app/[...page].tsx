import { builder, BuilderComponent, Builder } from '@builder.io/react';
import { notFound } from 'next/navigation';
import "@/builder/registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function CatchAllPage({ params }: { params: { page?: string[] } }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  const content = await builder.get('page', { url: urlPath }).toPromise();

  if (!content && !Builder.isEditing) {
    notFound(); // ✅ this sets the HTTP 404 response and shows your /404 page
  }

  return <BuilderComponent model="page" content={content} />;
}
