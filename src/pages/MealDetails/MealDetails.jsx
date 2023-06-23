import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlexBox } from '../../components/styled/Flexbox';
import useMealById from '../../components/hooks/useMealsById';
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material';
import { CounterBox } from './mealDeatails.style';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import useCart from '../../components/hooks/useCart';


const MealDetails = () => {
    const { mealId } = useParams()

    const [quantity, setQuantity] = useState(0)

    const removeCountHandler = () => {
        if (quantity === 0) {
            return;
        }
        setQuantity(quantity - 1);
    };

    const { meal, loading } = useMealById(mealId)

    const { setCart } = useCart()

    const addToCartHandler = () => {
        setCart((cart) => [
            ...cart,
            {
                ...meal,
                quantity,
            }
        ])
    }

    const adjustQuantity = (type) => {
        setQuantity(type === 'add' ? quantity + 1 : quantity - 1)
        setCart((cart) =>
            cart.map((item) => {
                if (item._id === meal._id) {
                    return {
                        ...item,
                        quantity:
                            type === 'add' ? item.quantity + 1 : item.quantity - 1,
                    }
                }
                return item
            }))
    }

    if (loading) return <h2>Loading...</h2>

    return (
        <Box>
            <Container>
                <FlexBox sx={{ my: 5, gap: 10, alignItems: "flex-start" }}>
                    {/* meal details will go there */}

                    <Box sx={{ flex: 1 }}>
                        <Stack spacing={4}>
                            <Typography variant='h4' fontWeight={600}>
                                {meal.title}
                            </Typography>
                            <Typography
                                variant='body'
                                color='primary.greyText'
                                sx={{
                                    width: 450
                                }}

                            >
                                {meal.description}
                            </Typography>
                            <FlexBox>
                                <Typography
                                    variant='h4' fontWeight={400}

                                >
                                    ${meal.price}
                                </Typography>
                                <CounterBox>

                                    <Add onClick={() => adjustQuantity('add')} />
                                    <Typography
                                        variant='h5'
                                        sx={{ width: '20px' }}
                                        fontWeight={600}

                                    >{quantity}</Typography>
                                    <Remove onClick={() => adjustQuantity('remove')} />

                                </CounterBox>
                            </FlexBox>
                            <Button startIcon={<ShoppingCartOutlined />}
                                sx={{
                                    width: ['100%', '100%', '40%']
                                }}
                                onClick={addToCartHandler}

                            >Add</Button>
                        </Stack>
                        <Box sx={{ mt: 10 }}>
                            <ImageSlider images={meal.images} />
                        </Box>
                    </Box>
                    {/* image will go there */}
                    <Box sx={{ flex: 1 }}>
                        <img src={meal.defaultImage} alt='meal' style={{
                            maxWidth: '500px',
                            width: '100%',
                            margin: '0 auto',
                            display: 'block'
                        }} />
                    </Box>
                </FlexBox>
            </Container> 
        </Box>
    );
};

export default MealDetails;