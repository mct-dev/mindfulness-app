import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    darkMode: boolean
    color: {
      primary: string
      positive: string
      negative: string
      black: string
      white: string
    }
  }
}
