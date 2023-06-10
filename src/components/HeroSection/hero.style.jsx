import { Box, styled } from '@mui/material'
import bg from '../../assets/images/bannerbackground.png'

export const HeroSectionWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    width: '100%',
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: '115%'
}))

export const SearchBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: "50px",
    overflow: 'hidden',
    marginTop: theme.spacing(5),
    '& input': {
        border: 'none',
        outline: 'none',
        padding: '1rem 2rem',
        width: '100%',
        borderRadius: '30px',
        fontSize: '1.2rem'
    },
    '& button': {
        position: 'absolute',
        right: '0',
        top: '0',
        background: '#F91944',
        border: 'none',
        outline: 'none',
        padding: '1rem 2rem',
        color: '#FFFFFF',
        fontSize: '1.2rem',
        borderRadius: '30px',
        cursor: 'pointer'
    },
}))