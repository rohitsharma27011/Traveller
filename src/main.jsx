import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TravelContextProvider from './Context/TravelContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TravelContextProvider>
           <App />
    </TravelContextProvider>
 
 
)
