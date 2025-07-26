import React from 'react';
import { usePreviewEditMode } from '@/context/PreviewEditModeContext';

type HeadingProps = React.PropsWithChildren<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

// Replace these with your actual DevLink bindings if needed
const _Builtin = {
  Block: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  Heading: ({ tag = 'h1', children }: HeadingProps) =>
    React.createElement(tag, {}, children),
  Text: ({ children }: React.PropsWithChildren) => <p>{children}</p>,
  Button: ({ children }: React.PropsWithChildren) => <button>{children}</button>,
};

type Section001Props = {
  as?: React.ElementType;
  sectionId?: string;
  headlineTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headline?: string;
  bodyText?: string;
  button1Text?: string;
  mode?: 'edit' | 'preview';
};

export function Section001({
  as: Component = _Builtin.Block,
  sectionId,
  headlineTag = 'h1',
  headline = 'One Pager Vertical Section Navigation',
  bodyText = '...',
  button1Text = 'Cloneable',
  mode: propMode,
  ...rest
}: Section001Props & React.HTMLAttributes<HTMLElement>) {
  const contextMode = usePreviewEditMode();
  const mode = propMode || contextMode;

  return (
    <Component id={sectionId} {...rest}>
      <_Builtin.Heading tag={headlineTag}>{headline}</_Builtin.Heading>
      <_Builtin.Text>{bodyText}</_Builtin.Text>
      {mode === 'edit' && (
        <div style={{ background: '#ffe', padding: 8, margin: '8px 0' }}>
          <em>Edit mode enabled: show extra controls here</em>
        </div>
      )}
      <_Builtin.Button>{button1Text}</_Builtin.Button>
    </Component>
  );
}
