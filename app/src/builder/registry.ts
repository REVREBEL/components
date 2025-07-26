import { Builder } from '@builder.io/react';
import HeroSection from '@/devlink/components/HeroSection';

Builder.registerComponent(HeroSection, {
  name: 'HeroSection',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue: 'Default Heading',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'ctaText',
      type: 'string',
    },
  ],
});
