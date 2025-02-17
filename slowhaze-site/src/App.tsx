import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import NotFound from './components/notfound'

function App() {

  return (
    <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/ds' element = {<Header/>} />
    </Routes>
  )
}

export default App
