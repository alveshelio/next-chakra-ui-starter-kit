import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import customTheme from '@theme/customTheme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
