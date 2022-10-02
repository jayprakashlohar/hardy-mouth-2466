import React from 'react'
import {
    Box,
    Button,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Text,
} from "@chakra-ui/react";

// import "./App.css";

import Chicken from './SingleComponents/Chicken';
import Fish from './SingleComponents/Fish';
import Mutton from './SingleComponents/Mutton';
import Ready from './SingleComponents/Ready';
import ColdCuts from './SingleComponents/ColdCuts';
import Spread from './SingleComponents/Spread';
import Egg from './SingleComponents/Egg';
import Biriyani from './SingleComponents/Biriyani';
import Combo from './SingleComponents/Combo';
import Feature from './SingleComponents/Feature';
import Prawns from './SingleComponents/Prawns';

let data = [{
    id: 0,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
    name: "Today's Deal"
},
{
    id: 1,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png",
    name: "Chicken"
},
{
    id: 2,
    image: "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png",
    name: "Fish & Seafood"
}
    ,
{
    id: 3,
    image: "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png",
    name: "Mutton"
}
    ,
{
    id: 4,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png",
    name: "Ready To Cook"
}
    ,
{
    id: 5,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png",
    name: "Prawns"
}
    ,
{
    id: 6,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png",
    name: "Cold Cuts"
}
    ,
{
    id: 7,
    image: "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png",
    name: "Spreads"
}
    ,
{
    id: 8,
    image: "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png",
    name: "Eggs"
}
    ,
{
    id: 9,
    image: "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png",
    name: "Biriyani & Kebab"
}
    ,
{
    id: 10,
    image: "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d531fa3-8969-b105-6e93-f8810d54ab4c/original/Combo_(1).png",
    name: "Combos"
},
{
    id: 11,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4720e482-c73d-6cca-3616-466432b4d0da/original/Ft_Collection_3_(1).png",
    name: "Featured Collections"
}
]

export default function PopHover() {

    return (

      
        <Popover  >
            <PopoverTrigger>
                <Box display="flex" cursor="pointer" sx={{ ml: "60px", mt: "10px", cursor: "pointer" }}>
                    <Image
                        src="https://m.licious.in/image/rebranding/svg/category-dropdown-icon.svg"
                        alt="tag"
                    />
                    <Text sx={{ ml: "15px",  fontSize: "13px", cursor: "pointer" }}>Category</Text>
                </Box>

            </PopoverTrigger>
            <PopoverContent mt="1.3rem" width="36rem" >
                <PopoverArrow />
                <PopoverBody  >
                    <Box display="flex" justifyContent="space-between" padding="0.5rem" alignItems="center">
                        <Box justifyContent="center" alignItem="center" overflowY="scroll" height="34rem" className='scroll'  >
                            {data.map((el) => (
                                <Popover trigger='hover' >
                                    <PopoverTrigger>
                                        <Box display="flex" padding="0.7rem" cursor="pointer"  >

                                            <Image width="2rem" src={el.image} alt={el.name} mr="1.5rem" />
                                            <Text fontSize="1.2rem">{el.name}</Text>
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent ml="33rem" mt="-5rem" >

                                        <PopoverBody backgroundColor="#EAEAEA"  >
                                            <Box  >
                                                {el.id === 0 ? "" : el.id === 1 ? <Chicken /> : el.id === 2 ? <Fish /> : el.id === 3 ? <Mutton /> : el.id === 4 ? <Ready /> : el.id === 5 ? <Prawns /> : el.id === 6 ? <ColdCuts /> : el.id === 7 ? <Spread /> : el.id === 8 ? <Egg /> : el.id === 9 ? <Biriyani /> : el.id === 10 ? <Combo /> : <Feature />}
                                            </Box>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            ))}
                        </Box>
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </Popover >
         
    )
}
