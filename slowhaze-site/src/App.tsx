import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import NotFound from './pages/notfound'

function App() {

  return (
    <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/'  element = {<Header/>} />
    </Routes>
  )
}

export default App
