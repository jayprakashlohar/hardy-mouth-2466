import React from "react";
import {
    Input,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'


const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sign In/ Sign Up</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Enter Mobile Number' />
          </DrawerBody>

          <DrawerFooter>
            <Button w="full" variant='outline' mr={3} onClick={onClose}>
              Proceed Via OTP
            </Button>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Login