
import './index.css'
import Home from './screens/home/Home'
import { Route,Routes } from 'react-router-dom'
import AddGame from './screens/addGame/AddGame'
import SuccessfulPage from './screens/addGame/SuccessfulPage'
import Signup from './screens/auth/Signup'
import Game from './screens/display-game/Game'
import EditGame from './screens/addGame/EditGame'



function App() {


  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add-game' element={<AddGame/>} />
      <Route path='/success' element={<SuccessfulPage/>} />
      {/* <Route path='/game' element={<Game/>} /> */}
      <Route path='/edit-game' element={<EditGame/>} />
      <Route path='/games/:id' element={<Game/>} />
    </Routes>
  


 
    </>
  )
}

export default App
