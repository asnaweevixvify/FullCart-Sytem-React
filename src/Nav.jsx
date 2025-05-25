import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className="nav-container">
        <Link to='/'><i className="fa-solid fa-house fa-2xl"></i></Link>
        <input type='text' onInput={textType}></input>
        <Link to='/cart'><i className="fa-solid fa-cart-shopping fa-2xl"></i></Link>
    </div>
  )
  function textType(e){
    props.getInput(e.target.value)
  }
}

export default Nav