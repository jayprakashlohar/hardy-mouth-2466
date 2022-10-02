import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Image } from "@chakra-ui/react"



export default class SimpleSlider extends Component {
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        
      <Box className="bg">
        <Slider {...settings}>
          <Box>
            <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"/>
       
          </Box>
          <Box>
          <Image src="http://www.dealnloot.com/wp-content/uploads/2022/08/licious-feast20.jpg"/>
        
          </Box>
          <Box>
          <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"/>
       
          </Box>
          <Box>
          <Image src="http://www.dealnloot.com/wp-content/uploads/2022/08/licious-feast20.jpg"/>
        
          </Box>
          <Box>
          <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"/>
         
          </Box>
          <Box>
          <Image src="http://www.dealnloot.com/wp-content/uploads/2022/08/licious-feast20.jpg"/>
          </Box>
        </Slider>
        <Box w="full" h="25px">
       </Box>
      </Box>
    );

  }

}















