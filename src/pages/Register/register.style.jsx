import { Box, styled } from "@mui/material";

export const AuthForm = styled(Box)(({theme}) => ({
    // background: "#f7f7f7",
            width: '100%',
            maxWidth: 500,
            margin: '0 auto' ,
            marginTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
            padding: theme.spacing(2)
}))