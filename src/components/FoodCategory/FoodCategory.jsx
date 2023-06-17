import React from 'react';
import TabButtons from '../Custom/TabButtons';
import useMeals from '../hooks/useMeals';
import FoodCart from '../FoodCart/FoodCart';
import { Box, Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton/Skeleton';

const categories = ['breakfast', 'lunch', 'dinner']

const FoodCategory = () => {

    const [value, setValue] = React.useState(0);

    const { meals, loading } = useMeals(categories[value])
    return (
        <Box>

            <Container>
                <Box sx={{
                    maxWidth: 500,
                    mx: 'auto'
                }}>
                    <TabButtons value={value} setValue={setValue}></TabButtons>
                </Box>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    justifyItems: 'center',
                    gap: '20px',
                    mt: 8
                }}
                >
                    {!loading && meals?.map(meal => <FoodCart meal={meal}></FoodCart>)}
                    {loading && Array.from(new Array(6)).map((item) => (
                         <Box sx={{width: 350}}>
                         <Skeleton
                             width={250}
                             height={250}
                             variant='circular'
                             animation='wave'
                             sx={{
                                 mx: "auto"

                             }}
                             
                         ></Skeleton>
                         <Skeleton width={350} height={50} variant='text' />
                         <Skeleton width={350} height={100} variant='text' />
                         <Skeleton width={100} height={70} variant='text' sx={{mx: 'auto'}} />
                     </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FoodCategory;