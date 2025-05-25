import React from 'react'
import './App.css'


function Report(props) {
    const data = props.data
    const count = props.cartCount
    const cartOnArr = props.cartOnArr
    const priceSplit = count.map((e,index)=>{
      return e*data[index].price
    })
    const priceAll = priceSplit.reduce((sum,num)=>{
      return sum + num
    },0)
    const countAll = count.reduce((sum,num)=>{
      return sum + num
    })
    
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
          <h2>ราคา {priceAll} บาท</h2>
        </div>
    </div>
  )
  function increase(i){
    props.getIncrease(i)
  }
  function decrease(i){
    props.getDecrease(i)
  }
}

export default Report