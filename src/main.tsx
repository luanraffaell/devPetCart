import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router'
import { router } from './App'
import { CartContextProvider } from './contexts/cartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
    <Toaster
        position='top-center'
        reverseOrder={false}
      />
    <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>,
)
