import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/notfound'
import Home from './pages/home'

function App() {

  return (
    <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/'  element = {<Home/>} />
    </Routes>
  )
}

export default App
