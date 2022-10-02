import React from "react";
import { Box, Heading } from "@chakra-ui/react"


const BillDetails = () => {
    return  (
        <Box border="1px solid gray" w="400px" h="165px" mt="100px" borderStyle="dashed" bg="#fff">
        <Heading fontSize={"20px"} mt="10px" ml="10px">BILL DETAILS</Heading>

        <p className="Cartp">Subtotal <span className="Span">269</span></p>
        <p className="Cartp">Delivery Charge <span className="Span1" >39</span></p>
        <p className="Cartp">Discount <span className="Span">0</span></p>
        <hr />

        <Box mt="10px" ml="10px">Total <span className="span2"> ₹ 308</span></Box>
    </Box>
    )
}

export default BillDetails