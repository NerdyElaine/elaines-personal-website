import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import custom from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={custom}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
