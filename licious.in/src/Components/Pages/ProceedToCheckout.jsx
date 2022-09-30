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

} from "@chakra-ui/react";



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
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent  >
                    <DrawerHeader borderBottomWidth='1px' >Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default PlacementExample;