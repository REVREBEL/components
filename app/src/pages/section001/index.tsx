'use client';

import { Section001 } from '@/components/Section001';
import { PreviewEditModeProvider } from '@/context/PreviewEditModeContext';

export default function Section001Page({ searchParams }) {
  const mode = searchParams?.mode === 'edit' ? 'edit' : 'preview';

  return (
    <PreviewEditModeProvider mode={mode}>
      <Section001
        sectionId="section-1"
        headline="Demo Section"
        bodyText="This is an example section rendered manually."
        button1Text="Cloneable"
        mode={mode}
      />
    </PreviewEditModeProvider>
  );
}
