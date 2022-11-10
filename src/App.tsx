import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Header } from './components/header/'
import { Navbar, NavbarStudent } from './components/navbar'
import { Footer } from './components/footer'

// Pages
import { Home } from './pages/home'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <NavbarStudent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
