
import { Container, Grid, Box, GridItem, Image, Text, VStack, Heading, Flex, Button, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";


const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/Products").then((res) => setData(res.data));
        console.log(data)
    }, []);

    return (

        <Container className="bg"
            maxW={{ base: "full", }}
            p={{ base: 2, lg: 0 }}
        >
            <Box ml="100px" mb="20px">
                <Heading fontSize="25px" fontWeight="450" >Shop by categories</Heading>
                <p>Freshest meats just for you</p>
            </Box>

            <Grid
                bg="#f8f8f8"
                w="85%"
                m="auto"
                templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(4,1fr)",
                }}
                gap={8}
            >
                {data.map((el) => (
                    <GridItem key={el.id}>
                        <Box
                            columns={{ sm: 2, md: 4 }}
                            spacing="9"
                            p={0}
                            textAlign="center"
                            rounded="lg"
                            color="black"
                        >
                            <VStack>
                                <div className="img"   >
                                    <img src={el.image} alt="error" />
                                </div>
                                <Box fontWeight="600">
                                    <Text>{el.title}</Text>
                                </Box>
                            </VStack>
                        </Box>
                    </GridItem>
                ))}

            </Grid>

            <Flex className="join" sx={{ p: "18px", w: "60%", m: "auto", mt: "40px", borderRadius: "10px", justifyContent: "space-between", bg: "#ffdc93"}}>

                <Box >
                    <Image w="100px" src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" />

                </Box>

                <Box>
                    <Button bg="#D11243" color="#fff" borderRadius="5px" fontSize="14px">JOIN NOW</Button>

                </Box>
            </Flex>
            <Box mt="30px" textAlign='center' fontWeight='550' color='#D11243' fontSize='22px'>
                <h2>Know the Licious way</h2>
            </Box>

            <Flex sx={{ border: "1px solid #dedddd", w: "80%", p: "15px", m: 'auto', borderRadius: "8px", justifyContent: "space-between" }}>

                <Box borderRight="1px solid #dedddd" fontSize="17px" pr="20px" pl="20px">
                    <p>Premium  <br />Produce</p>
                </Box>
                <Box borderRight="1px solid #dedddd" fontSize="17px" pr="40px" >
                    <p>World-Class Centrial <br />Production Unit</p>
                </Box>
                <Box borderRight="1px solid #dedddd" fontSize="17px" pr="40px">
                    <p>150 Quality   <br />Checks</p>
                </Box>
                <Box borderRight="1px solid #dedddd" fontSize="17px" pr="40px">
                    <p>Delivered Freash  <br />Everyday</p>
                </Box>
                <Box fontSize="17px" pr="40px">
                    <p>Extraordinary  <br />Cooking</p>
                </Box>
            </Flex >

            <Button mt='5px' w="160px" alignItems='center' ml='44%' border=' 2px solid #D11243' color=' #D11243' fontWeight='650'>
                Discover How
                <img className="arrow" src="https://www.licious.in/img/rebranding/arrow.png" />
            </Button>
             
                 <Box mt='5px' ml="15%" w='70%' >
                    <Image borderRadius="5px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp"/>
                 </Box>
             
        </Container>
    )
};

export default Product;
