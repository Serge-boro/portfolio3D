import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UseContext } from './useContext/UseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UseContext>
    <App />
  </UseContext>
)
