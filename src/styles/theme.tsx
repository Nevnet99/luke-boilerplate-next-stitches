import { createStitches } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      red500: 'tomato',
    },
    font: {
      base: 'Roboto, sans-serif',
    },
    space: {
      1: '5px',
      2: '10px',
    },
    media: {
      '@mobile': '(min-width: 375px)',
      '@tablet': '(min-width: 768px)',
      '@laptop': '(min-width: 1024px)',
      '@desktop': '(min-width: 1440px)',
    },
  },
});
