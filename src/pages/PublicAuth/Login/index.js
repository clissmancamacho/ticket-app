import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
  Text,
  Box,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import LoginImage from 'assets/images/LoginImage.jpg'

export default function Login() {
  const [form, setForm] = useState(false)
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit="cover"
          maxHeight={{ base: '49vh', sm: '49vh', md: '100vh' }}
          height={{ base: '100%', sm: 'auto' }}
          width="100%"
          src={LoginImage}
        />
      </Flex>
      <Flex p={{ base: 0, sm: 4 }} flex={1} align={{ base: 'flex-start', sm: 'center' }} justify={'center'}>
        <Center p={8}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'4xl'} textAlign="left">
              ¡Hola!
            </Heading>
            <Text fontSize={'lg'} textAlign="left">
              Ya es momento de vivir una nueva experiencia
            </Text>
            {form ? (
              <Box>
                <FormControl id="email">
                  <FormLabel>Correo Electronico</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Contraseña</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={2}>
                  <Stack direction={{ base: 'column', sm: 'row' }} align={'center'} justify={'space-between'}>
                    <Checkbox>Recuerdame</Checkbox>
                    <Link color={'teal.500'} fontSize="sm">
                      Olvidaste la Contraseña?
                    </Link>
                  </Stack>
                  <Button colorScheme={'teal'} variant={'solid'}>
                    Ingresar
                  </Button>
                  <Button colorScheme={'gray'} variant={'solid'} onClick={() => setForm(false)}>
                    {`< Volver`}
                  </Button>
                </Stack>
              </Box>
            ) : null}
            {form ? null : (
              <Center>
                <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
                  {/* Mail */}
                  <Button
                    w={'full'}
                    colorScheme={'teal'}
                    variant={'solid'}
                    leftIcon={<AiOutlineMail />}
                    onClick={() => setForm(true)}
                  >
                    <Center>
                      <Text>Continua con Email</Text>
                    </Center>
                  </Button>

                  {/* Facebook */}
                  <Button w={'full'} variant={'outline'} leftIcon={<FaFacebook />}>
                    <Center>
                      <Text>Continua con Facebook</Text>
                    </Center>
                  </Button>

                  {/* Google */}
                  <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                    <Center>
                      <Text>Continua con Google</Text>
                    </Center>
                  </Button>
                </Stack>
              </Center>
            )}
            );
          </Stack>
        </Center>
      </Flex>
    </Stack>
  )
}
