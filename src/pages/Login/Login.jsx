import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Box, Button, Container, Typography } from '@mui/material';
import { AuthForm } from '../Register/register.style';
import RedOnionTextfield from '../../components/Custom/RedOnionTextfield';
import bg from '../../assets/images/bannerbackground.png'

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const { loginUser, googleSignIn } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async ({ email, password }) => {
        await loginUser(email, password, navigate)

        reset()
    }
    const handleGoogleLogin = async () => {
        await googleSignIn( navigate)

        reset()
    }
    return (
        <Box
            sx={{
                height: '90vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: '200%'
                // background: "#f7f7f7",
            }}>
            <Container>
                <AuthForm onSubmit={handleSubmit(handleLogin)} component='form'>
                    <Typography
                        variant="h2"
                        color='primary'
                        textAlign='center'>
                        Log In
                    </Typography>

                    <RedOnionTextfield label="Email" type="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Please enter email address'
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                ,
                                message: 'Invalid email address'
                            }
                        })}
                        error={errors.email}
                        helperText={errors.email && errors.email.message} />
                    <RedOnionTextfield label="Password" type='password'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Please enter a password'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 character.'
                            }
                        })}
                        error={errors.password}
                        helperText={errors.password && errors.password.message} />

                    <Button
                        sx={{
                            borderRadius: '8px'
                        }}
                        type='submit'>
                        Log In
                    </Button>

                    <Link
                        to='/register'
                        style={{
                            color: '#f91944',
                            textAlign: 'center',
                            textDecoration: "none"
                        }}
                        component={Link}>
                        Create new account</Link>
                        
                    <Button
                        sx={{
                            borderRadius: '8px'
                        }}
                        onClick={handleGoogleLogin}
                        type='submit'>
                        Google 
                    </Button>
                </AuthForm>
            </Container>
        </Box>
    );
};

export default Login;