import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { SeatModal } from './SeatModal'

const options = [
  { id: 1, desc: '1 lorem ipsum' },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' },
]

const PackageTier = ({ title, options, typePlan, checked = false }) => {
  const [openModal, setOpenModal] = useState(false)

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
      <SeatModal open={openModal} setOpen={setOpenModal} />
      <Flex flex={0.5}>
        <Heading size={'md'}>{title}</Heading>
      </Flex>
      <Flex flex={0.5}>
        <List spacing={3} textAlign="start">
          {options.map((desc) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
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
          onClick={() => setOpenModal(true)}
        >
          Comprar
        </Button>
      </Stack>
    </Stack>
  )
}
const Pricing = () => {
  return (
    <Box py={{ base: 0, sm: 6 }} px={{ base: 0, sm: 5 }} min={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              La mejor banda de metal <Text color="purple.400">En nuestro país</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed
              officiis commodi labore odit.
            </Text>
          </Stack>
        </Stack>
        <Stack justifyContent={'center'}>
          <Divider />
          <PackageTier title={'Popular'} typePlan="$50.00" options={options} />
          <Divider />
          <PackageTier title={'VIP'} checked={true} typePlan="$70.00" options={options} />
          <Divider />
          <PackageTier title={'VIP+'} typePlan="$100.00" options={options} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Pricing
