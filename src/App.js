import React from 'react'
import { ScrollToTop } from 'components'
import Router from './routes'
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <ScrollToTop />
          <Router />
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
