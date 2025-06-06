import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


function Report(props) {
    const data = props.data
    const count = props.cartCount
    const cartOnArr = props.cartOnArr
    const [getStatus,setGetStatus] = useState(true)
    const navigate = useNavigate()
    const priceSplit = count.map((e,index)=>{
      return e*data[index].price
    })
    const priceAll = priceSplit.reduce((sum,num)=>{
      return sum + num
    },0)
    const countAll = count.reduce((sum,num)=>{
      return sum + num
    })

    useEffect(()=>{
      if(countAll === 0){
        setGetStatus(true)
      }
      else{
        setGetStatus(false)
      }
    },[countAll])
    
  return (
    <div className="cart-container">
        {data.map((e,index)=>{
            if(cartOnArr[index]){
                return(
                    <ul className='cart-list' key={index}>
                        <li><img src={e.image_url}></img></li>
                        <li><h4>{e.foodName}</h4></li>
                        <li><h4>{e.price} บาท</h4></li>
                        <li><h4>x{count[index]}</h4></li>
                        <li>
                            <div className="cartPressReport">
                                <i className="fa-solid fa-minus fa-lg" onClick={()=>decrease(index)} ></i>
                                <h5 className='countReport'>{count[index]}</h5>
                                <i className="fa-solid fa-plus fa-lg" onClick={()=>increase(index)}></i>
                            </div>
                        </li>
                    </ul>
                )

            }
        })}
        <div className="reportPrice">
          <h2>สินค้าทั้งหมด {countAll} รายการ</h2>
          <h2>|</h2>
          <h2>ราคา {priceAll} บาท</h2>
        </div>
        <button className='getBtn' disabled={getStatus} onClick={sendFood}>สั่งซื้ออาหาร</button>
    </div>
  )
  function increase(i){
    props.getIncrease(i)
  }
  function decrease(i){
    props.getDecrease(i)
  }
  function sendFood(){
    Swal.fire({
      title: `<h3>สั่งซื้อสำเร็จ</h3>`,
      icon: "success",
      draggable: true
    }).then(()=>{
      navigate('/')
    }).then(()=>{
      window.location.reload()
    })
  }
}

export default Report