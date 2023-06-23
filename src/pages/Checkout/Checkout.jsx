import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { FlexBox } from '../../components/styled/Flexbox';
import RedOnionTextfield from '../../components/Custom/RedOnionTextfield';
import { AuthForm } from '../Register/register.style';
import { useNavigate } from 'react-router-dom';
import meal1 from '../../assets/images/breakfast/breakfast3.png'
import meal2 from '../../assets/images/lunch/lunch3.png'

const Checkout = () => {
    const navigate = useNavigate()
    return (
        <Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                m: '0 auto',
                gap: '1rem'
            }}>
                <Box
                    sx={{
                       height: '100vh',
                        
                        position: 'relative',
                        overflow: 'hidden',
                        // background: "#f7f7f7",
                    }}>
                    <Container>
                        <AuthForm component='form'>
                            <Typography
                                variant="h5"
                                color='#fffff'
                                textAlign='start'
                                >
                                Edit delivery details
                                <hr></hr>
                            </Typography>
                            <RedOnionTextfield
                                type="text" defaultValue="Deliver to door" readOnly />
                            <RedOnionTextfield
                                type="text" defaultValue="159/2 khilgao, Dhaka" readOnly />
                            <RedOnionTextfield
                                type="text" defaultValue="Flat, suite or floor" disabled />
                            <RedOnionTextfield
                                type="text" defaultValue="Business Name" disabled />
                            <RedOnionTextfield
                                type="text" defaultValue="Add delivery instructor" disabled />
                            <Button
                                onClick={() => navigate('/order-status')}
                                sx={{
                                    borderRadius: '8px'
                                }}
                                type='submit'>
                                Save & Continue
                            </Button>
                        </AuthForm>
                    </Container>
                </Box>
                <Box sx={{
                    p: 2,
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                 
                   <Box>
                        <Typography variant='text'   display='block'>From <span sx={{}}>Red Onion Restaurant GPR</span></Typography>
                        <Typography variant='text' sx={{my:1}}  display='block'>Arriving in 20 - 30 minutes</Typography>
                        <Typography variant='text' >159/2 khilgao, Dhaka</Typography>
                    </Box>
                    <Box>
                        <FlexBox sx={{
                            maxWidth: '500px',
                            width: '100%',
                            borderRadius: 1,
                            bgcolor: '#f5f5f5',
                            gap: 2,
                            p: 2,
                            mt: 2

                        }}>
                            <Avatar alt="Remy Sharp" src={meal1} sx={{ width: 56, height: 56 }} />
                            <Box>
                                <Typography variant='h6'>Butter Nan</Typography>
                                <Typography variant='h5' color='primary'>$ 40</Typography>
                                <Typography color="primary.greyText" variant='body2'>Delivery free</Typography>
                            </Box>

                        </FlexBox>
                        <FlexBox sx={{
                            maxWidth: '500px',
                            width: '100%',
                            borderRadius: 1,
                            bgcolor: '#f5f5f5',
                            gap: 2,
                            p: 2,
                            mt: 2

                        }}>
                            <Avatar alt="Remy Sharp" src={meal2} sx={{ width: 56, height: 56 }} />
                            <Box>
                                <Typography variant='h6'>Butter Nan</Typography>
                                <Typography variant='h5' color='primary'>$ 50</Typography>
                                <Typography color="primary.greyText" variant='body2'>Delivery free</Typography>
                            </Box>

                        </FlexBox>
                        <Box sx={{
                             maxWidth: '500px',
                             width: '100%',
                             gap: 2,
                             p: 2,
                             mt: 2
                        }}>
                        <FlexBox justifyContent='space-between'>
                        <Typography variant='text'>Subtotal (2 items)</Typography>
                        <Typography variant='text' color='primary'>$ 90</Typography>
                        </FlexBox>
                        <FlexBox justifyContent='space-between'>
                        <Typography variant='text'>Tax</Typography>
                        <Typography variant='text' color='primary'>$ 10</Typography>
                        </FlexBox>
                        <FlexBox justifyContent='space-between'>
                        <Typography variant='text'>Delivery fee</Typography>
                        <Typography variant='text' color='primary'>$ 00</Typography>
                        </FlexBox>
                        <FlexBox justifyContent='space-between'>
                        <Typography variant='h6'>Total</Typography>
                        <Typography variant='h6' color='primary'>$ 100</Typography>
                        </FlexBox>
                        </Box>
                        <Button  sx={{ mt: 2, borderRadius: "4px", width: '100%', maxWidth: '500px' }} borderRadius='0'  disabled>Place Order</Button>
                    </Box>
                   </Box>
              
            </Box>
        </Box>
    );
};

export default Checkout;