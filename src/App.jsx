import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme/theme';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MealDetails from './pages/MealDetails/MealDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderStatus from './components/OrderStatus/OrderStatus';
import Checkout from './pages/Checkout/Checkout';



const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: "/meal-details/:mealId",
        element: <PrivateRoute>
          <MealDetails></MealDetails>
        </PrivateRoute>
      },
      {
        path: "/order-status",
        element: <OrderStatus></OrderStatus>
      },

    ]
  }
])
function App() {
 

  return (

    <ThemeProvider theme={theme}>
        <div className='App'>
        <CssBaseline></CssBaseline>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeProvider>
  
  )
}

export default App
