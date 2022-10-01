import React from "react";
import {
    DrawerContent,
    DrawerHeader,
    RadioGroup,
    DrawerBody,
    Radio,
    Button,
    Stack,
    Drawer,
    DrawerOverlay,
    useDisclosure,
    Box,
    Heading,



} from "@chakra-ui/react";
import BillDetails from "./BillDetails";



function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <Box >
            <RadioGroup defaultValue={placement} onChange={setPlacement}>
                <Stack direction='row' mb='4'>

                </Stack>
            </RadioGroup>
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent maxW="440px" bg="#f8f8f8">
                    <DrawerHeader borderBottomWidth='1px' bg="#fff" >Order Summary</DrawerHeader>
                    <Box w="full" bg="green" h="35px" color="#fff" textAlign="center" pt="4px" fontSize="14px">
                        Free delivery on all orders above ₹399
                    </Box>
                    <DrawerBody >
                        <Box w="400px" m="auto" h="auto" display="flex" justifyContent="space-between" bg="#fff">
                            <Box fontSize="15px" mt="10px" fontWeight="600" >
                                <Button h="25px" mr="10px" ml="2px">1</Button>
                                Chekin Breast-Boneles
                            </Box>

                            <Box >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Box>

                        </Box>
                        <Box w="400px" h="50px" display="flex" bg="#fff" >
                            <Box border="1px solid teal" w="60px" h="25px" mt="10px" ml="50px" fontSize="14px" pl="3px" borderRadius="5px"  > 450gms </Box>
                            <Box color="red" ml="15px" mt="10px"> ₹ 269.00</Box>
                            <Button h="25px" mt="10px" ml="60px">-</Button>
                            <Button h="25px" ml="5px" mt="10px">1</Button>
                            <Button h="25px" ml="5px" mt="10px">+</Button>
                        </Box>

                        <BillDetails />

                        <Box w="400px" h="50px" mt="100px" display="flex">
                            <Box w="200px" textAlign="center" pt="10px" bg="#fff" fontWeight="600">Total: ₹ 308 </Box>

                            <Button w="200px" h="50px" color="#fff" bg="#D11243">Proceed to checkout</Button>
                        </Box>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>



    )
}

export default PlacementExample;