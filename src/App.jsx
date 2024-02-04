import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/achievements' element={<Achievements/>}></Route>
      </Routes>
    </>
  )
}

export default App
