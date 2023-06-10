import { Box, Container } from '@mui/material';
import React from 'react';
import TabButtons from '../Custom/TabButtons';

const FoodCategory = () => {
    return (
       <Box>
        <Container>
            <Box sx= {{
                maxWidth: 500,
                mx: 'auto'
            }}>
                <TabButtons></TabButtons>
            </Box>
        </Container>
       </Box>
    );
};

export default FoodCategory;