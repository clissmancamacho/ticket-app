import React from 'react'
import { Box, Heading, Link, Image, Text, useColorModeValue, Container, VStack, Divider } from '@chakra-ui/react'
import MetallicaImg from 'assets/images/metallica.jpg'
import Pricing from 'components/_Event/Pricing'
import { EventAndDate, Tags } from 'components'

const Event = () => {
  return (
    <Container maxW={'7xl'} p={{ base: 0, sm: '12' }}>
      <Heading as="h1">Metallica World Tour</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: '100%', sm: '85%' }} zIndex="2" marginLeft={{ base: '0', sm: '5%' }} marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image borderRadius="lg" src={MetallicaImg} alt="some good alt text" objectFit="contain" />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(teal.600 1px, transparent 1px)',
                'radial(teal.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
          <VStack spacing={2}>
            <Tags tags={['Heavy Metal', 'Band']} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Venezuela Tour
              </Link>
            </Heading>
            <Text as="p" marginTop="2" color={useColorModeValue('gray.700', 'gray.200')} fontSize="lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            <EventAndDate name="Caracas, CCCT" date={new Date('2022-10-06T19:01:27Z')} />
          </VStack>
        </Box>
      </Box>
      <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: 3, sm: 10 }}>
        <Divider />
        <Heading marginTop="1">
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Precios
          </Link>
        </Heading>
        <Pricing />
      </Box>
    </Container>
  )
}

export default Event
