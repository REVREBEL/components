import React from 'react';
import { usePreviewEditMode } from '@/context/PreviewEditModeContext';

// Replace these with your actual DevLink bindings if needed
const _Builtin = {
  Block: (props) => <div {...props} />,
  Heading: ({ tag = 'h1', children }) => React.createElement(tag, {}, children),
  Text: ({ children }) => <p>{children}</p>,
  Button: ({ children }) => <button>{children}</button>,
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
}) {
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
