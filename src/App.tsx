import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import { ProductsProvider } from './Context/Context'
import { GlobalStyle } from './style/global'

  import { ToastContainer, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsProvider>
          <Router />
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </ProductsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
