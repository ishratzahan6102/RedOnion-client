import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout'
import Home from './pages/Home/Home'




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
    <>
      <div >
        <CssBaseline></CssBaseline>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
