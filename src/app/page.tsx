import { builder, BuilderComponent } from '@builder.io/react';
import "@/builder/registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function HomePage() {
  const content = await builder.get('page', { url: '/' }).toPromise();

  return <BuilderComponent model="page" content={content} />;
}
