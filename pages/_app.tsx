import { ThemeProvider } from '@emotion/react'
import { AppProps } from "next/dist/next-server/lib/router/router"
import { useEffect, useState } from "react"
import { Global } from "~styles"
import createGlobalStyles from "~styles/global"
import theme from "~styles/theme"

function MyApp({ Component, pageProps }: AppProps) {

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
