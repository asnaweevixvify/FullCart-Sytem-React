import './App.css'
import React from 'react'
import { useState , useEffect } from 'react'

function List(props) {
    
    const [data,setData] = useState(props.data)
    const [inputData,setInputData] = useState(props.data)
    const input = props.sendData
    const count = props.cartCount
    const cartOn = props.cartOnArr

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
                            <h4 className='price'>ราคา {e.price} บาท</h4>
                            {!cartOn[index] && <button onClick={()=>cartToggle(index)}>หยิบใส่ตะกร้า</button>}
                            {cartOn[index] && <div className="cartPress">
                                <i className="fa-solid fa-minus fa-lg" onClick={()=>decrease(index)}></i>
                                <h4 className='count'>{count[index]}</h4>
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
    props.getToggle(i)
  }
  function increase(i){
    props.getIncrease(i)
  }
  function decrease(i){
    props.getDecrease(i)
  }
}

export default List