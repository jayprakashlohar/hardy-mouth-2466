import { Box, Button, Flex, Image } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import BillDetails from "../Components/BillDetails"

const Thankyou = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/");
    }
    

    return (
        <Box w="full" bg="#f8f8f8">
            <Box bg="#f8f8f8" >
                <Image src="addressThankyou.png" m="auto" pt="40px"/>
            </Box>
            <Flex  w="89%" h="450px" bg="#f8f8f8" m="auto">
                <Box mt="50px" ml="170px">
                    <Image src="orderPlaced.png" />
                </Box>
                <Box m="-50px 20px 30px 100px">
                    <BillDetails />
                    <Flex border="1px dashed gray" mt="62px" bg="#ffffff" h="100px" justifyContent="center" alignItems="center">
                        <Button onClick={goToHome} className="btn" >Shop more</Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
export default Thankyou