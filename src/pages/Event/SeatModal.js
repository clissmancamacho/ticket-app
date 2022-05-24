import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import SeatPicker from 'react-seat-picker'
import { rowsExample1 as rows } from './data'

export function SeatModal({ open, setOpen }) {
  const [loading, setLoading] = useState(false)
  // const [state, setState] = useState({})

  const addSeatCallback = async ({ row, number, id }, addCb) => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(`Added seat ${number}, row ${row}, id ${id}`)
    const newTooltip = `tooltip for id-${id} added by callback`
    addCb(row, number, id, newTooltip)
    setLoading(false)
  }

  /*   const addSeatCallbackContinuousCase = async ({ row, number, id }, addCb, params, removeCb) => {
    setLoading(true)
    if (removeCb) {
      await new Promise((resolve) => setTimeout(resolve, 750))
      console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`)
      removeCb(params.row, params.number)
    }
    await new Promise((resolve) => setTimeout(resolve, 750))
    console.log(`Added seat ${number}, row ${row}, id ${id}`)
    const newTooltip = `tooltip for id-${id} added by callback`
    addCb(row, number, id, newTooltip)
    setLoading(false)
  } */

  const removeSeatCallback = async ({ row, number, id }, removeCb) => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(`Removed seat ${number}, row ${row}, id ${id}`)
    // A value of null will reset the tooltip to the original while '' will hide the tooltip
    const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
    removeCb(row, number, newTooltip)
    setLoading(false)
  }

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escoge tus asientos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flex={1} height="80vh" alignItems="center" justify={'center'}>
              <SeatPicker
                addSeatCallback={addSeatCallback}
                removeSeatCallback={removeSeatCallback}
                rows={rows}
                maxReservableSeats={3}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{ multiline: true }}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Aceptar
            </Button>
            <Button colorScheme="red" variant="ghost" onClick={() => setOpen(false)}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
