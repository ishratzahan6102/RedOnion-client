import { Box, Typography } from '@mui/material';
import React from 'react';
import { FlexBox } from '../styled/Flexbox';
import logo from '../../assets/images/logo2.png'

const Footer = () => {
    return (
        <>
            <Box sx={{
                // height: '100vh',
                width: "100%",
                background: 'black',
                p:8, 
                mt: 10
            }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
                    alignItems: 'start'
                }}
                    >
                    <Box sx={{p: 4 , }}>
                        <img
                            src={logo}
                            alt='restaurant'
                            style={{ width: 200, margin: '0 auto' }}
                        />
                    </Box>
                  <Box sx={{
                            
                        }}>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                }} 
                        >
                        <Box sx={{color: 'white', fontSize: '12px'}} >
                        <Typography sx={{color: 'white' , mt: 1}} variant='text'  display='block'>About our online food</Typography>
                        <Typography sx={{color: 'white',  mt: 1}} variant='text'  display='block'>Read our blog</Typography>
                        <Typography sx={{color: 'white' , mt: 1}} variant='text' display='block' >Sign up to deliver</Typography>
                        <Typography sx={{color: 'white' , mt: 1}} variant='text' display='block' >Add your restaurant</Typography>
                        </Box>
                        <Box sx={{color: 'white', fontSize: '12px'}}>
                        <Typography sx={{color: 'white' , mt: 1}} variant='text'   display='block'>Get help</Typography>
                        <Typography sx={{color: 'white',  mt: 1}} variant='text'  display='block'>Read FAQs</Typography>
                        <Typography sx={{color: 'white',  mt: 1}} variant='text' display='block'>View all cities</Typography>
                        <Typography sx={{color: 'white',  mt: 1}} variant='text' display='block'>Restaurant near me</Typography>
                        </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{mt: 10, display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '1rem'}}>
                    
                        <Box >
                            <Typography color='GrayText' variant='body2'>Copyright @ 2023 Online Food</Typography>
                        </Box>
                        <Box sx={{color: 'white' , fontSize: '12px'}}>
                      
                       <Box sx={{display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                    
                    }}>
                       <Typography sx={{color: 'white',}} variant='text' >Privacy Policy.</Typography>
                        <Typography sx={{color: 'white'}} variant='text' >Term of Use</Typography>
                        <Typography sx={{color: 'white'}} variant='text' >Pricing</Typography>
                       </Box>
                     
                        </Box>
                  
                </Box>
            </Box>
        </>

    );
};

export default Footer;