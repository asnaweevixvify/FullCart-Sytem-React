import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import List from './List'
import Report from './Report'
import { Routes , Route} from 'react-router-dom'

function App() {
  const [sendData,setSendData] = useState('')
  function getInput(e){
    setSendData(e)
  }

  return (
    <>
      <Nav getInput={getInput}/>
      <Routes>
        <Route path='/' element={<List sendData={sendData}/>}></Route>
        <Route path='/cart' element={<Report/>}></Route>
      </Routes>
    </>
  )
}

export default App
