import { Container, Heading } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Head from 'next/head'

const Contacts = () => (
  <Container>
    <Heading as="h2" fontSize={20} mb={6}>
      Contacts
    </Heading>
    <Paragraph>
      My only contact is Discord at the moment so DM me at "nerdyelaine". Email
      coming soon.
    </Paragraph>
  </Container>
)

export default Contacts
