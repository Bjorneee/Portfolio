import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='body-content'>
      <NavBar/>
      <Home/>
    </div>
  </StrictMode>,
)
