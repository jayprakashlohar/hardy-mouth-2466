import React from "react";
import { Box, Container, Divider, Flex, Heading, Image } from "@chakra-ui/react"

const Footer = () => {
    return (

        <Box sx={{  w: "full", h: "auto", bg: "#f8f8f8"}}>
            <Flex sx={{ w: "85%", m: "auto" }}>
                <Box py="20px">
                    <Image w="120px" src="https://www.licious.in/img/rebranding/licious-logo.svg" />
                </Box>
                <Box className="header" >
                </Box>
            </Flex>

            <Flex sx={{ w: "85%", m: "auto", h: "auto", mt: "20px" }}>

                <Box lineHeight="30px" w="20%">
                    <p className="pp">USEFUL LINKS</p>
                    <p>Why Licious?</p>
                    <p>Refer & Earn</p>
                    <p>Licious Cash & Cash+</p>
                    <p>Careers</p>
                    <p>BLOG</p>
                    <p>Campaign</p>
                    <p>Bug Bounty Guidelines</p>
                    <p>About Us</p>
                    <p>   FSSC 22000 Certification</p>
                    <p>FSSAI Licenses</p>
                    <p>Sitemap</p>

                </Box>
                <Box sx={{ w: "30%" }}>
                    <p className="pp">EXPERIENCE LICIOUS APP ON MOBILE</p>
                    <Box display="flex" mt="10px">
                        <Image src="https://www.licious.in/img/rebranding/app-store-new.svg" />
                        <Image ml="10px" src="https://www.licious.in/img/rebranding/play-store-new.png" />
                    </Box>
                    <Box display="flex" mt="250px">

                        <p>KEEP IN TOUCH  </p>
                        <Image ml="20px" src="https://www.licious.in/img/rebranding/insta_color.png" />
                        <Image ml="10px" src="https://www.licious.in/img/rebranding/fb_color.png" />
                        <Image ml="10px" src="https://www.licious.in/img/rebranding/twitter_color.png" />

                    </Box>
                </Box>

                <Box sx={{ lineHeight: "28px" }}>
                    <p className="pp">CONTACT US</p>
                    <p>Call: 1800-4190-786</p>
                    <p>Talktous@licious.com</p>
                    <p className="pp">REGISTERED OFFICE ADDRESS:</p>
                    <p>House of Licious, Zed Pearl, No 12,</p>
                    <p>Domlur Layout</p>
                    <p>Bangalore, Karnataka - 560071</p>

                </Box>
                <Box sx={{ lineHeight: "28px", pl: "10px" }}>
                    <p>T&C</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p className="pp">HAVE SECURITY CONCERN?</p>
                    <p>Mail us to:</p>
                    <p>security@licious.com</p>

                </Box>

                <Box w="12%">
                    <Image w="100%" src="https://www.licious.in/img/rebranding/3-dsecure.png" />
                </Box>
            </Flex>

            <Flex sx={{ w: "85%", m: "auto", h: "auto", mt: "50px" }}>
                <p className="pp">CITIES WE SERVE</p>

            </Flex>
            <hr className="hr" />
            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-between" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="20px" > Bengaluru</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > NCR</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Hyderabad</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chandigarh</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Panchkula</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" >  Mohali</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Mumbai</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Pune</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chenai</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Coimbatatore</Box>

            </Box>
            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-between" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="20px" > Vijayawada</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Visakhaptnam</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chandigarh</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Kolkata</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Pondicherry</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" >  Trichy</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Lucknow</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Kanpur</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Agra</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Thrissur</Box>

            </Box>



            <Flex sx={{ w: "85%", m: "auto", h: "auto", mt: "20px" }}>
                <p className="pp">POPULAR SEARCHES</p>

            </Flex>
            <hr className="hr" />
            <Heading fontSize="20px" ml="100px">CHICKEN</Heading>

            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-between" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Breast (Boneless)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken (Skinless) - Curry Cut (Large)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Mince/Keema</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Leg Curry Cut (Large - 4 pieces)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" >  Chicken Lollipop - 10 Pieces</Box>


            </Box>
            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-eveny" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="40px" > Tender Spring Chicken Curry Cut</Box>
                <Box borderRight="2px solid #eaeaea" pr="40px" pl="10px"  > Chicken - Whole with Skin</Box>
                <Box borderRight="2px solid #eaeaea" pr="40px" pl="10px" > Chicken Curry Cut (Small - 13 to 16 Pieces)</Box>

            </Box>
            <hr className="hrrr" />


            <Flex sx={{ w: "85%", m: "auto", h: "auto", mt: "20px" }}>
                <p className="pp">READY TO COOK</p>

            </Flex>
            <hr className="hr" />


            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-between" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Breast (Boneless)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken (Skinless) - Curry Cut (Large)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Mince/Keema</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Leg Curry Cut (Large - 4 pieces)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" >  Chicken Lollipop - 10 Pieces</Box>


            </Box>

            <hr className="hrrr" />


            <Flex sx={{ w: "85%", m: "auto", h: "auto", mt: "20px" }}>
                <p className="pp">EXOTIC MEATS</p>
            </Flex>
            <hr className="hr" />


            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-between" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="20px" > Atlantic Salmon Steaks</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Sea Bass/ Bhetki Fillet</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Mince/Keema</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Leg Curry Cut (Large - 4 pieces)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" >  Chicken Lollipop - 10 Pieces</Box>


            </Box>

            <hr className="hrrr" />

            <Flex sx={{ w: "85%", m: "auto", h: "auto", mt: "20px" }}>
                <p className="pp">SPREADS</p>
            </Flex>
            <hr className="hr" />


            <Box display="flex" w="85%" m="auto" h="auto" justifyContent="space-between" fontSize="14px"  >
                <Box borderRight="2px solid #eaeaea" pr="20px" > Atlantic Salmon Steaks</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Sea Bass/ Bhetki Fillet</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Mince/Keema</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" > Chicken Leg Curry Cut (Large - 4 pieces)</Box>
                <Box borderRight="2px solid #eaeaea" pr="20px" >  Chicken Lollipop - 10 Pieces</Box>

            </Box>

            <hr className="hrrr" />

             <Box w="85%" m="auto" mt="10px">
                <p className="p1">We will sell only the meat that we would eat ourselves.</p>
                <p className="p2">At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.</p>

             </Box>
             <Box w="85%" m="auto" mt="10px">
                <p className="p1">If it’s not fresh, we won’t sell it.</p>
                <p className="p2">For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 5°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?</p>

             </Box>
             <Box w="85%" m="auto" mt="10px">
                <p className="p1"> We will charge only for what you buy</p>
                <p className="p2">Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less</p>

             </Box>
             <hr className="hrrr" />


             <Box w="85%" m="auto" mt="10px">
                <p className="p3">2022 Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
                <p className="p4">Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs),experienced Licious, you'll never Marinades & Cold Cuts. All our products are completely natural and  </p>
                <p className="p5">go back to the old way of buying meat and seafood.</p>
             </Box>



        </Box>
    )
}

export default Footer;