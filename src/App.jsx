import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Experiences from './pages/Experiences'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/achievements' element={<Achievements/>}></Route>
        <Route path='/experiences' element={<Experiences/>}></Route>
      </Routes>
    </>
  )
}

export default App
