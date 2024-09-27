import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Events from "./components/Events.jsx"
import Registrations from './components/Registrations.jsx'

import { createBrowserRouter } from 'react-router-dom'
import Team from './components/Team.jsx'
import Blog from './components/Blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home /></>
  },
  {
    path: "/Events",
    element: <><Navbar /><Events /></>
  },
  {
    path: "/Registrations",
    element: <><Navbar /><Registrations /></>
  },
  {
    path: "/Team",
    element: <><Navbar /><Team /></>
  },
  {
    path: "/Blog",
    element: <><Navbar /><Blog /></>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default router
