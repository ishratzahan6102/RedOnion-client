import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthForm } from './register.style';
import RedOnionTextfield from '../../components/Custom/RedOnionTextfield';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Context/Context';
import { useAuth } from '../../components/hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import bg from '../../assets/images/bannerbackground.png'




const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const {registerWithEmailAndPassword, googleSignIn} = useAuth()
    const navigate = useNavigate()
    
    const handleRegister = async ({name, email, password}) => {
       await registerWithEmailAndPassword(name, email, password, navigate)
      
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
                <AuthForm onSubmit={handleSubmit(handleRegister)} component='form'>
                    <Typography
                        variant="h2"
                        color='primary'
                        textAlign='center'>
                        Sign Up
                    </Typography>
                    <RedOnionTextfield label="User name"
                        type="name"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }

                        })}
                        error={errors.name}
                        helperText={errors.name && errors.name.message} />


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
                        helperText={errors.email && errors.email.message}/>
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
                        helperText={errors.password && errors.password.message}/>

                    <Button
                        sx={{
                            borderRadius: '8px'
                        }}
                        type='submit'>
                        Sign Up
                    </Button>
                    
                    <Link
                        to='/login'
                        style={{
                            color: '#f91944',
                            textAlign: 'center',
                            textDecoration: "none"
                        }}
                        component={Link}>
                        Already have an account?</Link>
                        <Button
                        sx={{
                            borderRadius: '8px',
                        
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

export default Register;