import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import CategoryPage from "./pages/Category.jsx"
import Wishlist from "./pages/WishList.jsx"
import Cart from './pages/Cart.jsx'
import CustomProduct from './pages/CustomProduct.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/categories",
        element:<CategoryPage/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/categories/:categ",
        element:<CustomProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
