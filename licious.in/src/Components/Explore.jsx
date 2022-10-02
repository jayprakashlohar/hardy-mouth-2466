
// import { Container, Grid, Box, GridItem, Image, Text, VStack, Heading, Flex, Button, Divider } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import axios from "axios";


// const Explore = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:3000/Products").then((res) => setData(res.data));
//         console.log(data)
//     }, []);

//     return (

//         <Container className="bg"
//             maxW={{ base: "full", }}
//             p={{ base: 2, lg: 0 }}
//         >
//             <Box ml="100px" mb="20px">
//                 <Heading fontSize="25px" fontWeight="450" >Explore by category</Heading>
//                 <p>Freshest meats just for you</p>
//             </Box>

//             <Grid
//                 bg="#f8f8f8"
//                 w="85%"
//                 m="auto"
//                 templateColumns={{
//                     base: "repeat(1,1fr)",
//                     md: "repeat(2,1fr)",
//                     lg: "repeat(4,1fr)",
//                 }}
//                 gap={8}
//             >
//                 {data.map((el) => (
//                     <GridItem key={el.id}>
//                         <Box
//                             columns={{ sm: 2, md: 4 }}
//                             spacing="9"
//                             p={0}
//                             textAlign="center"
//                             rounded="lg"
//                             color="black"
//                         >
//                             <VStack>
//                                 <div className="img"   >
//                                     <img src={el.image} alt="error" />
//                                 </div>
//                                 <Box fontWeight="600">
//                                     <Text>{el.title}</Text>
//                                 </Box>
//                             </VStack>
//                         </Box>
//                     </GridItem>
//                 ))}

//             </Grid>
//         </Container>
//     )
// }

// export default Explore;




import { Container, Grid, Box, GridItem, Image, Text, VStack, Heading, Flex, Button, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";


const Categories = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3000/Products").then((res) => setData(res.data));
    //     console.log(data)
    // }, []);

    const Products = [
        {
            id: "1",
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
            title: "Plant-Based-Meat"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
            title: "Chiken",
            id: "2"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
            title: "Fish & Seafood",
            id: "3"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
            title: "Mutton",
            id: "4"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
            title: "Ready to Cook ",
            id: "5"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
            title: "Prawns",
            id: "6"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
            title: "Cold cuts",
            id: "7"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
            title: "Spreads",
            id: "8"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
            title: "Eggs",
            id: "9"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
            title: "Biryani & Kebab",
            id: "10"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png",
            title: "Combos",
            id: "11"
        },
        {
            image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png",
            title: "Today's Deals",
            id: "12"
        },
    ];




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
                {Products.map((el) => (
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

            <Flex className="join" sx={{ p: "18px", w: "60%", m: "auto", mt: "40px", borderRadius: "10px", justifyContent: "space-between", bg: "#ffdc93" }}>

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
                <Image borderRadius="5px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp" />
            </Box>

        </Container>
    )
};

export default Categories;
