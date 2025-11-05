import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './Style.css'
import RoutingHome from './components/Routing/RoutingHome'

createRoot(document.getElementById('root')).render(<App/>)
//! For Roter.
// createRoot(document.getElementById('root')).render(<RoutingHome/>)