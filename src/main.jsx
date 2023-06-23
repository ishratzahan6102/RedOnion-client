import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './components/Context/Context.jsx'
import CartContextProvider from './components/Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
    <Context>
    <App/>
   </Context>
    </CartContextProvider>
  
  </React.StrictMode>,
)
