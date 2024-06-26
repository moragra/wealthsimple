import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
