import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

function EventAndDate({ name, date }) {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </HStack>
  )
}

export default EventAndDate
