import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Image,
    Box,
    Stack,
    FormLabel,

} from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import ToastExample from './Toast'
import React from 'react'
import { useState } from 'react'
import { AppContext } from './Context/AppContext'

export default function LoginDrawer() {

    const {isAuth, setIsAuth, setCartItem} = useContext(AppContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const firstField = useRef()
    const btnRef = React.useRef()

    let handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
        console.log('e', username, password)
    }
    let handleClick = (e) => {
        e.preventDefault();
        onClose()
        localStorage.setItem('isAuth',JSON.stringify(true))
        setIsAuth(true)
    }

    const handleSubmit = () => {
        localStorage.setItem('cartItem',JSON.stringify(0))
        setCartItem(0)

        localStorage.setItem('isAuth',JSON.stringify(false))
        setIsAuth(false)
    }

    return (
        <>
            {isAuth ? 
            (<Box display="flex" ref={firstField} colorScheme='teal' onClick={handleSubmit} cursor="pointer" sx={{ ml: "60px", mt: "10px", cursor: "pointer" }} >
            <Image w="25px"
                src="https://m.licious.in/image/rebranding/png/profile-icon-new.png"
                alt="tag"
            />
            <Text sx={{ ml: "15px", mt: "3px", fontSize: "13px", cursor: "pointer" }}>Logout</Text>
        </Box>) 
            : <Box display="flex" ref={firstField} colorScheme='teal' onClick={onOpen} cursor="pointer" sx={{ ml: "60px", mt: "10px", cursor: "pointer" }} >
                <Image w="25px"
                    src="https://m.licious.in/image/rebranding/png/profile-icon-new.png"
                    alt="tag"
                />
                <Text sx={{ ml: "15px", mt: "3px", fontSize: "13px", cursor: "pointer" }}>Login</Text>
            </Box>}
            <Box >

            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent maxW="420px" p="10px" backgroundImage="url('https://m.licious.in/image/rebranding/jpg/user-login-new.jpg')">
                    <DrawerCloseButton />
                    <Box bg="#fff" mt="70%" pb="200px">
                        <DrawerHeader >
                            Sign In/ Sign Up
                        </DrawerHeader>
                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <Input
                                        variant='flushed'
                                        ref={firstField}
                                        id='username'
                                        placeholder='Enter Mobile Number'
                                        name='username'
                                        type="number"
                                        onChange={handleChange}
                                        />
                                </Box>
                                <Box>
                                    <Input
                                        variant='flushed'
                                        ref={firstField}
                                        id='password'
                                        type="number"
                                        placeholder='Enter your OTP'
                                        name='password'
                                        onChange={handleChange}
                                    />
                                </Box>
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter >
                            <Button disabled={!password} bg="#d4d4d4" w="full" border="1px solid red" variant='outline' onClick={handleClick}> {username && password ? <ToastExample /> : 'Proceed Via OTP'}</Button>
                        </DrawerFooter>
                        <p className="p">By signing in you agree to our <span>  <p>terms and conditions</p></span></p>
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    )
}