
import { Container, Grid, Box, GridItem, Image, Text, VStack, Heading, Flex, Button, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";


const Explore = () => {
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
                <Heading fontSize="25px" fontWeight="450" >Explore by category</Heading>
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
        </Container>
    )
}

export default Explore;

