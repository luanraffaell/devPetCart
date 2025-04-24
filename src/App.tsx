import { createBrowserRouter } from 'react-router'
import { Home } from './pages/home'
import { Layout } from './components/layout'
import { CartPage } from './pages/cart'
import { Error } from './pages/error'
import { ProductDetail } from './pages/details'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/cart",
        element: <CartPage />
      },
      {
        path:"product/:id",
        element: <ProductDetail/>
      }
    ]
  },
  {
    path:"*",
    element: <Error />
  }
])

export { router }
