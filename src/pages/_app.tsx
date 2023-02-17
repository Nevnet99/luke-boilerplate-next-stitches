import StyleProvider from '@contexts/StyleProvider';
import GlobalStyles from '@styles/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </StyleProvider>
  );
}
