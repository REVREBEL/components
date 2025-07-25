'use client';

import React, { createContext, useContext } from 'react';

type Mode = 'preview' | 'edit';

const PreviewEditModeContext = createContext<Mode>('preview');

export const usePreviewEditMode = () => useContext(PreviewEditModeContext);

interface Props {
  mode: Mode;
  children: React.ReactNode;
}

export function PreviewEditModeProvider({ mode, children }: Props) {
  return (
    <PreviewEditModeContext.Provider value={mode}>
      {children}
    </PreviewEditModeContext.Provider>
  );
}
