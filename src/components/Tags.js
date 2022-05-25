import React from 'react'
import { HStack, Tag } from '@chakra-ui/react'

function Tags({ tags, marginTop }) {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="teal" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

export default Tags
