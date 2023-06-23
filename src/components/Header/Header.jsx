import { Badge, Box, Button, Container, IconButton, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from "../../assets/images/logo2.png"
import { FlexBox } from '../styled/Flexbox';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoginOutlined } from '@mui/icons-material';
import useCart from '../hooks/useCart';

const Header = () => {

    const navigate = useNavigate()
    const { user, logOut } = useAuth()
    const {cart} = useCart()
    console.log(cart)

    const handleLogout = () => {
        logOut()
    }
    return (
        <div>
            <Container>
                <FlexBox justifyContent="space-between"
                    sx={{ padding: "2rem 0" }}>

                    <img src={logo}
                        alt="logo"
                        style={{ width: "160px" }} 
                        onClick={() => navigate('/')}/>

                    <Stack direction="row"
                        spacing={4}
                        sx={{ alignItems: "center" }}>
                        <Box>
                        <Badge sx={{
                            cursor:'pointer' ,
                            '&:hover svg' : {
                                color: 'primary.main'
                            }
                        }} badgeContent={cart?.reduce(
                            (acc,curr) => 
                            (acc += curr.quantity), 0)} 
                            color="primary"
                            onClick={() => navigate('/checkout')}>
                        <ShoppingCartOutlinedIcon />
                        </Badge>
                            
                           {!user && (
                            <>
                             <Button variant='text'
                                sx={{ color: '#191919' }}
                                to='/login'
                                LinkComponent={Link}
                            >Log in
                            </Button>
                            <Button to='/register'
                                LinkComponent={Link}>Sign Up
                            </Button>
                            </>
                           )}
                           {user && (
                            <>
                            <Button variant='text' sx={{color:'#191919 !important'}}  >{user.displayName}</Button>
                            <IconButton onClick={handleLogout}>
                                <LoginOutlined></LoginOutlined>
                            </IconButton>
                            </>
                           )}
                        </Box>
                    </Stack>
                </FlexBox>
            </Container>
        </div>
    );
};

export default Header;