import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from "../../assets/images/logo2.png"
import { FlexBox } from '../styled/Flexbox';

const Header = () => {
    return (
        <div>
            <Container>
                <FlexBox justifyContent="space-between" sx={{ padding: "2rem 0" }}>

                    <img src={logo}
                        alt="logo"
                        style={{ width: "160px" }} />

                    <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
                        <Box>
                            <IconButton>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                            <Button variant='text'>Login</Button>
                            <Button >Sign Up</Button>
                        </Box>
                    </Stack>
                </FlexBox>
            </Container>
        </div>
    );
};

export default Header;