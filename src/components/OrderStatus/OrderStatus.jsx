import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react';
import map from '../../assets/images/googleMap.jfif'
import man from '../../assets/images/Group 1151.png'
import { FlexBox } from '../styled/Flexbox';
import logo from '../../assets/images/Group 1152.png'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const steps = [
    {
        label: 'Your location',
        description: `159/2 khilgao, Dhaka`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },

];


const OrderStatus = () => {
    const navigate = useNavigate()


    return (
        <Box my={8}>
            <Container maxWidth='lg' >
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    m: '0 auto',
                    gap: '1rem'
                }} justifyContent='space-evenly' gap={10} >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: 1,
                            overflow: 'hidden'
                        }}>
                        <img
                            src={map}
                            alt='map'
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                bgcolor: '#f5f5f5',
                                borderRadius: 1,
                                p: 4
                            }}>
                            <img
                                src={man}
                                alt='shipping'
                                style={{ width: 100, margin: '0 auto' }}
                            />
                        </Box>

                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '500px',
                                borderRadius: 1,
                                bgcolor: '#ffffff',
                                p: '2',
                                my: '2'
                            }}>
                            <Stepper orientation="vertical">
                                {steps.map((step, index) => (
                                    <Step key={step.label} completed={true} expanded={true}>
                                        <StepLabel
                                            optional={
                                                index === 2 ? (
                                                    <Typography variant="caption">Last step</Typography>
                                                ) : null
                                            }
                                        >
                                            {step.label}
                                        </StepLabel>
                                        <StepContent>
                                            <Typography color="primary.greyText">{step.description}</Typography>

                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box sx={{
                            bgcolor: '#f5f5f5',
                            p: 2,
                            mt: 2
                        }}>
                            <Typography variant='h5'>09:00</Typography>
                            <Typography color='primary.greyText' variant='caption'>Estimated delivery time</Typography>
                        </Box>
                        <FlexBox sx={{
                            maxWidth: '550px',
                            width: '100%',
                            borderRadius: 1,
                            bgcolor: '#f5f5f5',
                            gap: 2,
                            p: 2,
                            mt: 2

                        }}>
                            <Avatar alt="Remy Sharp" src={logo} sx={{ width: 56, height: 56 }} />
                            <Box>
                                <Typography variant='h6'>Your Rider</Typography>
                                <Typography color="primary.greyText" variant='body2'>Mr. Hero</Typography>
                            </Box>

                        </FlexBox>
                        <Button fullWidth sx={{ mt: 2, borderRadius: "4px" }} borderRadius='0' onClick={() => navigate('/')}>Contact</Button>
                    </Box>


                </Box>
            </Container>
        </Box>
    );
};

export default OrderStatus;