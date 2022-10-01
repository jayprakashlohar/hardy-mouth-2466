import { Box, Button, Flex, Image } from "@chakra-ui/react"
import React from "react"

const Address = () => {

    return (
        <Flex  w="full" h= "600px" bg="#f8f8f8" >
            <Box mt="50px" ml="100px">
                <Image src="AddressLeft.png" />
                <Box className="proceedBtn" w="750px" h= "70px" bg="#ffffff">
                    <Button className="btn" mt="10px" ml="20px">Proceed to Shipment</Button>
                </Box>
            </Box>
            <Box mt="20px" ml="50px">
                <Image src="progress1.png" />

            </Box>
        </Flex>
    )
}
export default Address