import {
  Container,
  Box,
  Heading,
  ListItem,
  List,
  Link,
  Button,
  ListIcon,
  UnorderedList,
  OrderedList
} from '@chakra-ui/react'
import { IoLogoTumblr, IoLogoReddit, IoLogoGithub } from 'react-icons/io5'
import { FaLastfmSquare } from 'react-icons/fa'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Elaine's Cozy Nook
          </Heading>
          <p>A silly little gal's nook</p>
        </Box>
      </Box>

      <section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Hi I'm Elaine(She/Her). I am a nerdy person or wannabe polymath who
          likes random nerdy things on the internet. I am only an indie
          programmer with only this website as a coding project. I am a tech
          connoiseur being interested in very niche stuff like open sourced
          software like Linux and etc.
        </Paragraph>
      </section>

      <section delay={0.2}>
        <Heading as="h3" variant="section-title">
          "Expertise"
        </Heading>
        <Paragraph>
          I am an "expert" in a lot of technology which i mostly vent Because
          its a topic that I'm very passionate about. I'm well versed in.
        </Paragraph>
        <UnorderedList>
          <ListItem>Linux</ListItem>
          <ListItem>MacOS</ListItem>
          <ListItem>Windows</ListItem>
          <ListItem>iOS/AppleOS</ListItem>
        </UnorderedList>
      </section>
      <section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Programming, Computer Science, Mathematics, Philosophy, Gaming,
          Environmental Science, Playing Guitar.
        </Paragraph>
      </section>
      <section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Me on the silly web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NerdyElaine" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @NerdyElaine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.last.fm/user/ImWeliana" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaLastfmSquare />}
              >
                @ImWeliana
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.reddit.com/user/NerdyElaine/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoReddit />}
              >
                u/NerdyElaine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.tumblr.com/verynerdyelaine" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTumblr />}
              >
                verynerdyelaine
              </Button>
            </Link>
          </ListItem>
        </List>
      </section>
    </Container>
  )
}

export default Page
