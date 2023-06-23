import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f94949",
            mainBg: "#191919",
            hover: "#ff9caf",
            greyText: "#727272"
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg"
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    fontFamily: '"Poppins", "Roboto" , "Helvetica", "Arial", sans-serif',
                    padding: "0.5rem 2rem",
                    borderRadius: "40px",
                    textTransform: "capitalize",
                    color: "#ffffff"
                }
            },
            defaultProps: {
                variant: "contained" ,

            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#191919",
                    fontFamily: '"Poppins", "Roboto" , "Helvetica", "Arial", sans-serif'
                }
            }
        },
        typography:{
            fontFamily: '"Poppins", "Roboto" , "Helvetica", "Arial", sans-serif'
        }
    }
});


// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyA_8O51pKuyYcwk8R4cSM8RocdmlOtKNpE",
//   authDomain: "redonion-78cba.firebaseapp.com",
//   projectId: "redonion-78cba",
//   storageBucket: "redonion-78cba.appspot.com",
//   messagingSenderId: "647379044090",
//   appId: "1:647379044090:web:f24e3f7b1c973908d3eb43",
//   measurementId: "G-2YB2B023P7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app