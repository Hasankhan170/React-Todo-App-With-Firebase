import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/',
        // element : <Todo/>
      },
      {
    path : 'Login',
    element : <Login/>
  },
  {
    path : 'Register',
    element : <Register/>
  }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout/>
  </RouterProvider>

)
