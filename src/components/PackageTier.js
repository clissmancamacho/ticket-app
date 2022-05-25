import React from 'react'
import { Button, Flex, Heading, List, ListIcon, ListItem, Stack, useColorModeValue } from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const PackageTier = ({ title, options, typePlan, checked = false, btnAction = () => {} }) => {
  const colorTextLight = checked ? 'white' : 'teal.600'
  const bgColorLight = checked ? 'teal.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'teal.500'
  const bgColorDark = checked ? 'teal.400' : 'gray.300'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Flex flex={0.5}>
        <Heading size={'md'}>{title}</Heading>
      </Flex>
      <Flex flex={0.5}>
        <List spacing={3} textAlign="start">
          {options.map((desc) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
      </Flex>
      <Flex flex={0.5}>
        <Heading size={'xl'}>{typePlan}</Heading>
      </Flex>

      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          onClick={() => btnAction()}
        >
          Comprar
        </Button>
      </Stack>
    </Stack>
  )
}

export default PackageTier
