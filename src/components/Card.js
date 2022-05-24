import { Box, useColorModeValue } from '@chakra-ui/react'

export default function Card({ children, w = 'full', boxShadow = '2xl', rounded = 'md', overflow = 'hidden' }) {
  return (
    <Box w={w} bg={useColorModeValue('white', 'gray.800')} boxShadow={boxShadow} rounded={rounded} overflow={overflow}>
      {children}
    </Box>
  )
}
