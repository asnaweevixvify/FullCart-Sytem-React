import { useState , useEffect} from 'react'
import './App.css'
import Nav from './Nav'
import List from './List'
import Report from './Report'
import { Routes , Route} from 'react-router-dom'
import Data from './Data'


function App() {

  const [data,setData] = useState(Data)
  const [cartOnArr,setCartOnArr] = useState(Array(Data.length).fill(false))
  const [cartCount,setCartCount] = useState(Array(Data.length).fill(0))
  const [sendData,setSendData] = useState('')

  useEffect(()=>{
    cartCount.map((e,index)=>{
      if(e === 0){
        const newArr = [...cartOnArr]
        newArr[index] = false
        setCartOnArr(newArr)
      }
    })
  },[cartCount])

  function getInput(e){
    setSendData(e)
  }

  function getIncrease(i){
    const newArr = [...cartCount]
    newArr[i] = newArr[i]+1
    setCartCount(newArr)
  }

  function getDecrease(i){
      const newArr = [...cartCount]
      newArr[i] = newArr[i]-1
      setCartCount(newArr)
  }

  function getToggle(i){
    const newArr = [...cartOnArr]
    newArr[i] = !newArr[i]
    const arr = [...cartCount]
    arr[i] = arr[i]+1
    setCartOnArr(newArr)
    setCartCount(arr)
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
