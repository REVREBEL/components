/** @format */

import { builder, BuilderComponent, Builder } from "@builder.io/react";
import "@/builder/registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function CatchAllPage({ params }: { params: { page?: string[] } }) {
  const urlPath = "/" + (params?.page?.join("/") || "");
  const content = await builder.get("page", { url: urlPath }).toPromise();

  if (!content && !Builder.isEditing) {
    return <div>404 - Page not found</div>;
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
    />
  );
}
