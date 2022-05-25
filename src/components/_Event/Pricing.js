import { Box, Divider, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import PackageTier from 'components/PackageTier'
import React, { useState } from 'react'
import { SeatModal } from './SeatModal'

const options = [
  { id: 1, desc: '1 lorem ipsum' },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' },
]

const tiers = [
  { title: 'Popular', typePlan: '$50.00', options: options },
  { title: 'VIP', typePlan: '$70.00', options: options, checked: true },
  { title: 'VIP+', typePlan: '$100.00', options: options },
]

const Pricing = () => {
  const [openModal, setOpenModal] = useState(false)

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
              La mejor banda de metal <Text color="teal.400">En nuestro país</Text>
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
        <Divider />

        <Stack justifyContent={'center'}>
          {tiers.map((tier, index) => (
            <Grid key={index}>
              <PackageTier {...tier} btnAction={() => setOpenModal(true)} />
              <Divider />
            </Grid>
          ))}
        </Stack>
      </Stack>
      <SeatModal open={openModal} setOpen={setOpenModal} />
    </Box>
  )
}

export default Pricing
