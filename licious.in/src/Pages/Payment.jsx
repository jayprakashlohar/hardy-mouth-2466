import React from "react"
import { Box, Button, Flex, Image, Input } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import pament from "./paymentLeft.png"
import Pament from "./progress3.png"



const Payment = () => {
    const navigate = useNavigate()

    const goToThankyou = () => {
        navigate("/order-status");
    }

    return (
        <Flex  w="full"  bg="#f8f8f8" pb="30px">
            <Box mt="50px" ml="100px">
                <Image src= {pament} />
                <Box className="proceedBtn" bg="#ffffff" w="562px" ml="10px">
                    <Box ml="160px" mr="20px" pt="20px" h="260px" bg="#ffffff">
                        <Input variant='flushed' w="400px" placeholder="Enter card no." type="number" />
                        <Flex mt="20px">
                            <Input variant='flushed' w="130px"  placeholder="MM" type="number" />
                            <Input variant='flushed' w="130px" ml="10px" placeholder="YYYY" type="number" />
                            <Input variant='flushed' w="130px" ml="10px" placeholder="Enter CVV" type="number" />
                        </Flex>
                        <Input variant='flushed' mt="20px" w="400px" placeholder="Name on card." type="text"  />
                    <Button onClick={goToThankyou} display="block" className="btn" mt="10px" >Pay ₹ 308</Button>

                    </Box>
                </Box>
            </Box>
            <Box mt="30px" ml="50px">
                <Image src={Pament} />

            </Box>
        </Flex>
    )
}

export default Payment