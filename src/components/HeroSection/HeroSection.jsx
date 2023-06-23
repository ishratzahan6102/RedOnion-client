import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { SearchBox, HeroSectionWrapper } from './hero.style';

const HeroSection = () => {
    return (
        <HeroSectionWrapper >
            <Container
                sx={{
                    height: '100%'
                }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        placeItems: 'center',

                    }}>

                    <Box sx={{
                        width: '100%'
                    }}>
                        <Typography variant='h2' fontSize='2.5rem' fontWeight={500} textAlign='center'>
                            Best Food Waiting For Your Belly
                        </Typography>

                        <SearchBox>

                            <input type='search' alt='Search Food' placeholder='Search Food' />
                            <button>Search</button>
                        </SearchBox>
                    </Box>

                </Box>
            </Container>
        </HeroSectionWrapper>
    );
};

export default HeroSection;