import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className="nav-container">
        <h2 className='nav-text'> Cart-System-React</h2>
        <div className="search-nav">
          <Link to='/'><i className="fa-solid fa-house fa-2xl"></i></Link>
          <input type='text' onInput={textType}></input>
          <Link to='/cart'><i className="fa-solid fa-cart-shopping fa-2xl"></i></Link>
        </div>
    </div>
  )
  function textType(e){
    props.getInput(e.target.value)
  }
}

export default Nav