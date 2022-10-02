import React from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import summery from "./progress2.png"

function DeliverySummary() {
    const navigate = useNavigate()

    const goToPayment = () => {
        navigate("/checkout/payments");
    }

    return (
        <Box w="full" h="400px" bg="#f8f8f8" display="flex">

            <Box sx={{ border: "1px solid #f8f8f8", ml: "10%", w: "50%", h: "280px", mt: "50px", bg: "#fff", borderRadius: "10px", boxShadow: 'md', }}>
                <Heading
                    fontSize="20px"
                    fontWeight="400"
                    mt="15px"
                    ml="20px"
                >1 item Delivered Today (30 September)</Heading>

                <Box border="1px solid teal" w="380px" h="40px" ml="22px" mt="25px " color="red" textAlign="center" pt="6px" fontWeight="600" >
                    Today 90 min
                </Box>
                <Box display="flex">
                    <Image
                        w="10%"
                        mt="20px"
                        ml="20px"
                        borderRadius="8px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/06467851-b012-3b3f-0f74-5c758afa2603/original/p1_tile_images-25.jpg?format=webp" />
                    <p className="pp6">Seer (Vanjaram/Surmai)Lag... <br /> 300gms <span className="price1">₹ 913.5</span> qty: 1</p>
                </Box>

                <Box mt="50px" ml="20px" color="#fff" >
                    <Button onClick={goToPayment} bg="#D11243">

                        Proceed to Payment</Button>
                </Box>
            </Box>
            <Box mt="20px" ml="50px">
                <Image src= {summery} />

            </Box>
        </Box>
    )
}

export default DeliverySummary;