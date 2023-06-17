import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FoodCart = ({ meal }) => {
 console.log(meal)
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '350px',
                padding: '30px 20px',
                borderRadius: '10px',
                '&:hover': {
                    cursor: 'pointer',
                    boxShadow: 24,
                }
            }}
            

            onClick={() => navigate(`/meal-details/${meal._id}`)}
            >
                
           
            
            <Box
                sx={{
                    mb: 3,
                    width: '80%',
                    margin: '0 auto'
                }}>
                <img
                    src={meal.defaultImage}
                    alt="breakfast"
                    style={{
                        width: '100%'
                    }} />
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                    {meal?.title}
                </Typography>

                <Typography
                    sx={{
                        textAlign: 'center',
                        color: '#8D8D8D'
                    }}
                >
                    {meal?.description.length > 50 ?
                        meal?.description.slice(0, 50) + '...'
                        : meal.description}
                </Typography>

                <Typography
                sx={{
                    textAlign: 'center',
                    mt: 2
                }}
                variant='h5'
                >
                    ${meal.price}
                </Typography>
            </Box>
        </Box>
    );
};

export default FoodCart;