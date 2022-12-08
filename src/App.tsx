import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Header } from './components/header/'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

// Pages
import { Home } from './pages/home'
import { Access } from './pages/access'
import { GlobalContext } from './context'

const App = () => {
  return (
    <>
      <GlobalContext>
        <BrowserRouter>

          <Header />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/acceso' element={<Access />} />
            <Route path="*" element={<h1>404</h1>} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </GlobalContext>
    </>
  )
}

export default App
