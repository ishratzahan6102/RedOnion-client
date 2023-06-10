import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import bg from '../../assets/images/bannerbackground.png'

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '70vh',
                width: '100%',
                background: `url(${bg}})`,
                backgroundPosition: 'center',
                backgroundSize: '115%'
            }}>
            <Container>
                <Box>
                    <Typography variant='h2' fontWeight={600}>
                        Best Food Waiting For Your Belly
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;