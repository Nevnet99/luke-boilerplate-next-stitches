import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  body: {
    fontFamily: '$font$base',
  },
  h1: {
    fontSize: '2rem',
    marginTop: '1rem',
    marginBottom: '0.4rem',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '1.5rem',
    marginTop: '0.8rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '1.2rem',
    marginBottom: '0.2rem',
    fontWeight: 'bold',
  },
  a: {
    display: 'inline-block',
  },
  p: {
    marginTop: '1rem',
    marginBottom: '1.25rem',
  },
  'h1, h2, h3': {
    letterSpacing: '0.04rem',
  },
});

export default globalStyles;
