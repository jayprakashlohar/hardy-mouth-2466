



import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Box, Heading, Container, Image } from "@chakra-ui/react";

export default function Boneless() {
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
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp",
            title: "Chicken Curry Cut - Small Pieces",
            description: "Small pieces of bone-in & boneless chicken ",
            pricingText: "₹151",
            ml: "500gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3e9023d4-e2f7-2fe6-c68f-75014733ff7e/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg?format=webp",
            title: "Chicken Curry Cut - Small Pieces (Large Pack)",
            description: "Bone-in chunky pieces of skinless meat including ",
            pricingText: "₹290",
            ml: "10000gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/06467851-b012-3b3f-0f74-5c758afa2603/original/p1_tile_images-25.jpg?format=webp",
            title: "Chicken Breast - Boneless",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹249",
            ml: "500gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2831d674-fd93-eec9-f638-5cf11c850d24/original/Lamb-Leg-(Boneless)-Hero-Shot_(1).jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹150",
            ml: "700gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1d3e67ab-07dd-3f3b-9c38-ce72952f939e/original/p0_tile_images-10.jpg?format=webp",
            title: "Deluxe Room",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹269",
            ml: "600gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7c01addb-3cff-9c0a-fa68-d4d6d41de5f5/original/large.jpg?format=webp",
            title: "King Deluxe Room",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹200",
            ml: "300gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/cfa66105-a48e-5653-4284-2e1a41033304/original/p0_tile_images-23.jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹187",
            ml: "800gms"

        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹120",
            ml: "1000gms"


        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/452a3295-208c-d0b0-0afa-0be964004ba7/original/Rich-Goat-Curry-Cut-(Small---19-to-21-Pieces)--Hero-Shot.jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹129",
            ml: "500gms"


        },
        {
            imageSrc:
                "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1ea5ff1f-52f3-c7aa-953a-a4d287e40247/original/p0_tile_images-15_(2).jpg?format=webp",
            title: "Royal Suite",
            description: "Lorem ipsum dolor sit amet, consectur dolori",
            pricingText: "₹151",
            ml: "700gms"

        },
    ];

    return (
        <Box bg="#f8f8f8">
            <div className="controls">
                <Button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </Button>
                <Button onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </Button>
            </div>
            <Heading ml="100px" fontSize="25px" fontWeight="500" mb="5px">Boneless Cuts</Heading>
            <div className="content">
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {hotelCards.map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.imageSrc} alt={card.title} className="card-image" />
                            <div  className="text-info">
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


            <div className="add">
                <Box>
                    <Image src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg" />

                </Box>
                <Box ml="10px">
                    <p> My Rewards  <br />   <span>Place an order and win your next reward!</span>
                        <span className="click">CLICK TO VIEW   </span>
                    </p>
                </Box>
            </div>

        </Box>
    );
}
