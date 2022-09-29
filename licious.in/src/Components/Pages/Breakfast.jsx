


import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Box, Heading, Container, Flex, Image } from "@chakra-ui/react";

export default function Breakfast() {
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const hotelCards = [
        {
            imageSrc:
                "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb2jhb/1/prod_display_image/1634375004.4382--2021-10-1614:33:24--905?format=webp",
            title: "Chicken Curry Cut - Small Pieces",
            description: "Small pieces of bone-in & boneless chicken ",
            pricingText: "₹151",
            ml: "Pieces:1"

        },

        {
            imageSrc:
                "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb2jhb/1/prod_display_image/1634375004.4382--2021-10-1614:33:24--905?format=webp",
            title: "Deluxe Room",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹269",
            ml: "Pieces:1"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d28ad62-9409-c682-3c22-8e0ebc1697d5/original/Chunky-Continental-Chicken-Spread.jpg?format=webp",
            title: "King Deluxe Room",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹200",
            ml: "Pieces:1"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹187",
            ml: "Pieces:1"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹120",
            ml: "Pieces:1"


        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/faa6ff18-1108-6acf-4885-aa0fdb5e13ec/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹129",
            ml: "Pieces:1"


        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee95638-21fd-1706-4569-ed42430fd716/original/Sriracha-chicken-spreadsTIle-image.jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹151",
            ml: "Pieces:1"


        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5c6b23b1-9940-30e2-7c3b-fc0d7be529a1/original/cold_cut-06.jpg?format=webp",
            title: "Chicken Curry Cut - Small Pieces (Large Pack)",
            description: "Bone-in chunky pieces of skinless meat including ",
            pricingText: "₹290",
            ml: "Pieces:1"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/36c60289-829d-830f-d4c7-c62675adb323/original/Frank---Chorizo-unCooked+new.jpg?format=webp",
            title: "Chicken Breast - Boneless",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹249",
            ml: "Pieces:1"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1ce4618e-f9ac-ad01-3ab2-5f9b26ba6a2b/original/Frank---Classic-UNCooked+tag.jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹150",
            ml: "Pieces:1"

        },
    ];

    return (
        <Box Box bg="#f8f8f8">

            <div className="controls">
                <Button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </Button>
                <Button onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </Button>
            </div>

            <Heading ml="100px" fontSize="25px" fontWeight="500" mb="5px">Breakfast & Snacking Specials</Heading>
            <div className="content">
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {hotelCards.map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.imageSrc} alt={card.title} className="card-image" />
                            <div className="text-info">
                                <div className="card-header">
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                                <div>
                                    <span>{card.ml}</span>
                                </div>

                                <span className="price">{card.pricingText}</span>

                            </div >
                            <Button float='right' bg='#D11243' color='#fff' >Add to Cart</Button>
                        </div>
                    ))}
                </Slider>
            </div>

            <Heading ml="100px" fontSize="25px" fontWeight="500" mb="5px" mt="100px ">Check out our blog</Heading>
            <Flex  w="85%" h="auto" m="auto" >
                <Box w="35%"  m="10px">
                    <Image borderRadius="10px" src="https://www.licious.in/blog/wp-content/uploads/2022/09/Shutterstock_11955199571.jpg" />
                    <Heading fontSize="20px">Chiken Lazone-A Quick and Easy Cream <br />
                        Sauce Recipe Ideal  a Perfect   <br />
                        Dinner At  Home !
                    </Heading>
                </Box>
                <Box w="35%"  m="10px" bg="#f8f8f8">
                    <Image borderRadius="10px" src="https://www.licious.in/blog/wp-content/uploads/2022/09/Shutterstock_1023331516.jpg" />
                    <Heading fontSize="20px">The Best Oven Fried Chiken Recipe  <br />
                        To Try At Home- It's Healthy,Juicy  <br />
                        and Delicious!
                    </Heading>
                </Box>
                <Box w="35%"  m="10px">
                    <Image borderRadius="10px" src="https://www.licious.in/blog/wp-content/uploads/2022/09/Shutterstock_13423681761.jpg" />
                    <Heading fontSize="20px">Teriyaki Chiken Noodle Salad -A Quick  <br />
                        and Easy Recipe to Try Out at Home ! <br />

                    </Heading>
                </Box>

            </Flex>

            <Box w="85%" m="auto" mt="10px">
                <Image src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"/>
            </Box>

        </Box>
    );
}

