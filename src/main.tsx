import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Home from './pages/home'
import Header from './components/layouts/header'
import Footer from "./components/layouts/footer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header />
      <Home />
      <Footer />
  </StrictMode>,
)
