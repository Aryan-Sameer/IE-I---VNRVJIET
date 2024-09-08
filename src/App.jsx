import { RouterProvider } from 'react-router-dom'
import Footer from "./components/Footer.jsx"
import router from './main.jsx'

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
