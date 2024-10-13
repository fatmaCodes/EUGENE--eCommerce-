import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import CategoryPage from "./pages/Category.jsx"
import Wishlist from "./pages/WishList.jsx"
import Cart from './pages/Cart.jsx'
import CustomProduct from './pages/CustomProduct.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthLayout from './component/AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/categories",
        element: <AuthLayout>
          <CategoryPage />
        </AuthLayout>

      },
      {
        path: "/wishlist",
        element: <AuthLayout>
          <Wishlist />
        </AuthLayout>

      },
      {
        path: "/cart",
        element: <AuthLayout>
          <Cart />
        </AuthLayout>

      },
      {
        path: "/categories/:categ",
        element: <AuthLayout>
          <CustomProduct />
        </AuthLayout>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
