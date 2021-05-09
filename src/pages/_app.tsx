import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { useEffect } from 'react'
import { createGlobalStyles, Global, theme } from '~styles'
import '~util/firebase'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (theme.darkMode) {
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={createGlobalStyles(theme)} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
