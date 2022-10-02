import { Box, Button, Flex, Image } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import addressLeft from "./addressLeft.png"
import address from "./progress1.png"

const Address = () => {
    const navigate = useNavigate()

    const goToDeliverySummary = () => {
        navigate("/checkout/delivery-summary");
    }

    return (
        <Flex  w="full" h= "600px" bg="#f8f8f8" >
            <Box mt="50px" ml="100px">
                <Image src= {addressLeft}/>
                <Box className="proceedBtn" w="750px" h= "70px" bg="#ffffff">
                    <Button onClick={goToDeliverySummary} className="btn" mt="10px" ml="20px">Proceed to Shipment</Button>
                </Box>
            </Box>
            <Box mt="20px" ml="50px">
                <Image src={address} />

            </Box>
        </Flex>
    )
}
export default Address