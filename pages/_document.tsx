import { Html, Head, Main, NextScript } from 'next/document'
import { Config } from '../components/Config'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ background:Config.default.background, color: Config.default.foreground }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
