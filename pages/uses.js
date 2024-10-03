import {
  Center,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Divider,
  UnorderedList,
  ListItem,
  List
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { FaStopwatch20 } from 'react-icons/fa'

const Uses = () => (
  <Container>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h1" variant="page-title">
          Uses
        </Heading>
        <p>What do i use?</p>
      </Box>
    </Box>
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Macbook Air M1 (Main Machine)
      </Heading>
      <UnorderedList>
        <ListItem>M1 Chip</ListItem>
        <ListItem>8GB of Ram</ListItem>
        <ListItem>256GB of Storage</ListItem>
        <ListItem>OS: MacOS</ListItem>
        <ListItem>WM: Yabai</ListItem>
        <ListItem>Terminal: Kitty</ListItem>
      </UnorderedList>
      <p>
        This is a very solid laptop that i will prob be using for the forseeable
        future unless whatever new thing Apple makes that will make the laptop
        obsolete. I do most of my coding on it and workflow stuff like Obsidian,
        Davinci Resolve if i want to do video editing for fun and MacOS being
        Unix based which is useful and easy to navigate and makes life a bit
        much easier when navigating files on the terminal. Tiling Window
        Managers are pretty scarce in the MacOS sphere only the 2 relevant one
        being Yabai and Amethyst. I use Yabai due to it being more powerful but
        with the cost of Disabling System Integrity Protection which isn't a big
        problem for me cus i don't install shady programs.
      </p>
    </Section>
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Asus TUF Gaming F15
      </Heading>
      <UnorderedList>
        <ListItem>Intel i5-10300H</ListItem>
        <ListItem>NVIDIA GTX 1650 Ti Mobile</ListItem>
        <ListItem>8GB of Ram</ListItem>
        <ListItem>512GB of SSD Storage and 1TB of HDD Storage</ListItem>
        <ListItem>OS: Arch Linux (I use Arch, btw)</ListItem>
        <ListItem>WM: BSPWM</ListItem>
        <ListItem>Terminal: Kitty</ListItem>
      </UnorderedList>
      <p>
        I wouldn't recommend getting a Gaming Laptop due to its power
        hungryness, poor battery life and how hot it can get. I recommend
        booting Linux on any laptop. I quit using Windows for more than a month
        now and using Linux has been very awesome especially being Unix based
        which made it easy to transition due to MacOS being Unix based. I use
        Arch due to it being a minimal distro due to me wanting to building it
        from the ground up and using a tiling window manager makes the workflow
        of the system much more satisfying. I still keep this machine for some
        specific tasks and gaming due to gaming on Linux is starting to be more
        viable and accessible.
      </p>
    </Section>
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Programming Stuff
      </Heading>
      <UnorderedList>
        <ListItem>Text Editor: Neovim</ListItem>
        <ListItem>Shell: Zsh</ListItem>
        <ListItem>Terminal Multiplexer: Tmux</ListItem>
        <ListItem>Note Taking: Obsidian</ListItem>
      </UnorderedList>
      <p>
        My text editor of choice is obviously Neovim. I don't hate IDEs like
        VSC, Netbeans, Xcode or anything from Jetbrains but Neovim/Vim is just a
        better text editor than all of these combined (Sorry cult of Emacs get
        trashed). It is a keyboard only text editor and using Neovim makes
        editing code much faster due to your fingers being stuck on the keyboard
        instead of in most IDEs being more biased towards the mouse like VSC and
        plugins are just enough for what is needed. I use Zsh due to it having a
        massive plugins community in which i use ohmyzsh and powerlevel10k and
        it looks nice when using the terminal. Tmux is such a game changer when
        using the terminal. It is an amazing utility to learn and it is one of
        the best pieces of software that will change your life forever. Obsidian
        is a really good note taking app. I've used Notion and it is decent but
        it was a very slow app especially when my internet starts to slow down
        my notion notes would take 15 seconds to load due to all of the notes
        being stored into the cloud. That's why i use Obsidian due to the notes
        being saved locally into your computer or saving it on a cloud drive
        like iCloud or Google Drive inorder to transfer notes from a Computer to
        a mobile device. It also uses Markdown which makes the notes look nice
        while being written in plain text.
      </p>
    </Section>
  </Container>
)

export default Uses
