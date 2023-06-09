import { Box, Button, Container, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from "../../assets/images/logo2.png"
import { FlexBox } from '../styled/Flexbox';

const Header = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <FlexBox></FlexBox>
                <Box>
                    <img src={logo}
                        alt="logo"
                        style={{ width: "160px" }} />
                </Box>
                <Box>
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    <Button>Sign In</Button>
                    <Button>Sign Up</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Header;