import './App.css'
import React from 'react'
import Data from './Data'
import { useState , useEffect } from 'react'

function List(props) {
    const [cartOnArr,setCartOnArr] = useState(Array(Data.length).fill(false))
    const [cartCount,setCartCount] = useState(Array(Data.length).fill(1))
    const [data,setData] = useState(Data)
    const [inputData,setInputData] = useState(data)
    const input = props.sendData

    useEffect(()=>{
            const newData = inputData.filter((e,index)=>{
                return e.foodName.includes(input)
            })
            setData(newData)
    },[input])

  return (
    <div className='list-container'>
        {data.map((e,index)=>{
            if(data){
                return(
                    <div key={index}>
                        <div className="box">
                            <img src={e.image_url}></img>
                            <h3>{e.foodName}</h3>
                            {!cartOnArr[index] && <button onClick={()=>cartToggle(index)}>หยิบใส่ตะกร้า</button>}
                            {cartOnArr[index] && <div className="cartPress">
                                <i className="fa-solid fa-minus fa-lg" onClick={()=>decrease(index)}></i>
                                <h4>{cartCount[index]}</h4>
                                <i className="fa-solid fa-plus fa-lg" onClick={()=>increase(index)}></i>
                            </div>}
                        </div>
                    </div>
                )
            }
        })}
    </div>
  )
  function cartToggle(i){
    const newArr = [...cartOnArr]
    newArr[i] = !newArr[i]
    setCartOnArr(newArr)
  }
  function increase(i){
    const newArr = [...cartCount]
    newArr[i] = newArr[i]+1
    setCartCount(newArr)
  }
  function decrease(i){
    if(cartCount[i] > 1){
        const newArr = [...cartCount]
        newArr[i] = newArr[i]-1
        setCartCount(newArr)
    }
    else{
        const newArr = [...cartOnArr]
        newArr[i] = !newArr[i]
        setCartOnArr(newArr)
    }
  }
}

export default List