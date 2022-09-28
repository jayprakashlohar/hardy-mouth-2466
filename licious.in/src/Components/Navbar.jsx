import React from "react";
import { Flex, HStack, Text, Box, Image, Input, Stack, Button, InputRightElement, Icon, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'


const Navbar = () => {
    return <div>

        <Flex sx={{ p: "4px", bg: "#eaeaea", fontSize: "14px", justifyContent: "space-around" }} >
            <HStack gap={4}>
                <ul>
                    <li>Why Licious?</li>
                </ul>
                <ul>
                    <li>Download App </li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                </svg>
            </HStack>

            <HStack gap={4} >

                <ul>
                    <li>FSSC 22000 Certification</li>
                </ul>

                <ul>
                    <li>About Us</li>
                </ul>
                <ul>
                    <li>Careers @Liciou </li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                </svg>

            </HStack>

        </Flex>

        <Flex border="1px solid teal" p='20px'>
            <Box sx={{ marginLeft: "100px",  }}>
                <Image src='https://www.licious.in/img/rebranding/licious-logo.svg' alt='logo' />
            </Box>
            <Box sx={{ marginLeft: "80px", border: '1px solid teal', }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span className="span">BENGALUIRU </span>

            </Box>
            <Stack>
                <InputGroup>
                    <Input
                        w="390px"
                        h="40px"
                        ml="50px"
                        cursor="pointer"
                        bg="#f8f8f8"
                        type="text"
                        placeholder="Search for any delicious product"

                    />
                    <InputRightElement width='4.5rem'>
                        <Icon as={SearchIcon} />
                    </InputRightElement>
                </InputGroup>
            </Stack>

            <Box sx={{ ml: "60px", mt: "10px", cursor: "pointer" }}>
                <Image src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" />

            </Box>
            <Box sx={{ ml: "15px", mt: "10px", fontSize: "13px" }}>
                <p>Categories</p>
            </Box>



            <Box sx={{ ml: "60px", mt: "10px", cursor: "pointer" }}>
                <Image src="https://www.licious.in/img/rebranding/profile_icon.svg" />

            </Box>
            <Box sx={{ ml: "15px", mt: "10px", fontSize: "13px" }}>
                <p>Login</p>
            </Box>


            <Box sx={{ ml: "60px", mt: "13px", cursor: "pointer" }}>
                <Image src="https://www.licious.in/img/rebranding/cart_icon.svg " />

            </Box>
            <Box sx={{ ml: "13px", mt: "13px", fontSize: "13px" }}>
                <p>Cart</p>
            </Box>


        </Flex>
    </div>;
};

export default Navbar;
