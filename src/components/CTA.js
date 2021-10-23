import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink
      isExternal
      href=""
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" bgGradient="linear(to-tr, teal.300,yellow.400)">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)
