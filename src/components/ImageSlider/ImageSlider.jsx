import { Box } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props 
    return (
        <Box 
        className={className}
        sx={{
            ...style,
            display: 'block' ,
            '&: :before': {
                color: '#191919'
            }
        }}
        onClick={onClick}
        ></Box>
    )
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props 
    return (
        <Box 
        className={className}
        sx={{
            ...style,
            display: 'block' ,
            '&: :before': {
                color: '#191919'
            }
        }}
        onClick={onClick}
        ></Box>
    )
}



const ImageSlider = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0 ,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };


    return (
        <Box sx={{
            width: '450px',
            margin: '0 auto'
        }}>
            <Slider {...settings}>
            {
                images.map((image) => (
                    <div style={{
                        width:'100%' ,
                        height:'100%'
                    }}>
                        <img 
                        src={image}
                        alt="meal"
                        style={{
                            width: '100%' ,
                            height: '100%',
                            objectFit: 'cover'
                        }}/>
                    </div>
                ))
            }
        </Slider>
        </Box>
    );
};

export default ImageSlider;