import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme/theme';




const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
