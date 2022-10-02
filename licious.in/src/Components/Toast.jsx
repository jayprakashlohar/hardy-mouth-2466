import { Box, Button, useToast } from '@chakra-ui/react'
export default function ToastExample() {
    const toast = useToast()
    return (
        <Box
            onClick={() =>
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }
        >
             Proceed Via OTP
        </Box>
    )
}