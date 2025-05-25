import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import List from './List'
import Report from './Report'
import { Routes , Route} from 'react-router-dom'
import Data from './Data'


function App() {

  const [data,setData] = useState(Data)
  const [cartOnArr,setCartOnArr] = useState(Array(Data.length).fill(false))
  const [cartCount,setCartCount] = useState(Array(Data.length).fill(1))
  const [sendData,setSendData] = useState('')
  function getInput(e){
    setSendData(e)
  }

  function getIncrease(i){
    const newArr = [...cartCount]
    newArr[i] = newArr[i]+1
    setCartCount(newArr)
  }

  function getDecrease(i){
    if(cartCount[i] > 1){
      const newArr = [...cartCount]
      newArr[i] = newArr[i]-1
      setCartCount(newArr)
    }
    else{
      const newArr = [...cartOnArr]
      newArr[i] =  !newArr[i]
      setCartOnArr(newArr)
    }
  }

  function getToggle(i){
    const newArr = [...cartOnArr]
    newArr[i] = !newArr[i]
    setCartOnArr(newArr)
  }

  return (
    <>
      <Nav getInput={getInput}/>
      <Routes>
        <Route path='/' element={<List data={data} cartCount={cartCount} 
        cartOnArr={cartOnArr}sendData={sendData}
        getIncrease={getIncrease} getDecrease={getDecrease} getToggle={getToggle}/>}></Route>
        <Route path='/cart' element={<Report cartCount={cartCount} 
        cartOnArr={cartOnArr} data={data} getIncrease={getIncrease} getDecrease={getDecrease}/>}></Route>
      </Routes>
    </>
  )
}

export default App
