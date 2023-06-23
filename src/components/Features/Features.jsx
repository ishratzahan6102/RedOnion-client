import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { DirectionsBus, LocalShipping, NotificationsActive } from '@mui/icons-material';
import FeaturesCard from '../FeaturesCard/FeaturesCard';


const featuresCardData = [
    {    id: 1,
        title: 'Fast delivery',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        image: 'https://i.ibb.co/cc8nQbw/adult-blur-blurred-background-687824.png',
        icon: DirectionsBus,
    },
    {   id: 2,
        title: 'A good auto responder',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        icon: LocalShipping,
        image: 'https://i.ibb.co/hMBwzGR/chef-cook-food-33614.png',
    },
    {   id: 3,
        title: 'Home Delivery',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        icon: NotificationsActive,
        image: 'https://i.ibb.co/fxnVgRS/architecture-building-city-2047397.png',
    },
];


const Features = () => {

    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Container>

                <Typography variant='h4'>Why choose us?</Typography>
                <Typography
                    variant='body2'
                    sx={{
                        maxWidth: '500px',
                        width: '100%',
                        mt: 3
                    }}
                >
                    Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or home? Then we are here to help.
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
                        justifyItems: 'center',
                        gap: '1rem',
                        alignItems: 'flex-start',
                        mt: 8
                    }}

                >
                    {
                        featuresCardData.map(feature => <FeaturesCard
                            feature={feature}
                            key={feature.id}
                        >

                        </FeaturesCard>)
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Features;