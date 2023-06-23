import React, {forwardRef} from 'react';
import { Box, Container, TextField, Typography, styled } from '@mui/material';

export const CustomTextField = styled(TextField)(({ theme }) => ({
    background: '#f5f5f5',
    borderRadius: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none !important' ,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main ,
        },
    },
    '& .MuiOutlinedInput-notchOutlined' : {
        border: 'none'
    }

}))


const RedOnionTextfield = (props, ref) => {
    return (
        <CustomTextField
            id='outlined-basic'
            {...props}
            inputRef={ref}></CustomTextField>
    );
};

export default forwardRef(RedOnionTextfield);