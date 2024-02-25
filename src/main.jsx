import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import './Navbar/navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
