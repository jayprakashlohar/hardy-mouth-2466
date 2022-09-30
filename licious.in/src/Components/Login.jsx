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
    useDisclosure,
    Box,
    Heading
  } from '@chakra-ui/react'


const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box >
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
        <DrawerContent p="10px" backgroundImage="url('https://m.licious.in/image/rebranding/jpg/user-login-new.jpg')" >
          <DrawerCloseButton />
          <Box bg="#fff"  mt="100%" pb="200px" >
          <DrawerHeader >Sign In/ Sign Up</DrawerHeader>

          <DrawerBody  >
            <Input 
            className="input"
        
            placeholder='Enter Mobile Number' />
          </DrawerBody>

          <DrawerFooter>
            <Button bg="#d4d4d4" w="full"  variant='outline'  onClick={onClose}>
              Proceed Via OTP
            </Button>
          
          </DrawerFooter>
          <p className="p">By signing in you agree to our <span>  <p>terms and conditions</p></span></p>
          </Box>
        </DrawerContent>
      </Drawer>
      
    </Box>
  )
}

export default Login ;