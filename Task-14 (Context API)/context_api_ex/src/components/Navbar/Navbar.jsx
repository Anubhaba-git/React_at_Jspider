import React, { useState,useEffect } from 'react';
import './Navbar.css';
import  { useContext } from 'react';
import { PiShoppingCartBold } from "react-icons/pi"
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiStorefront } from "react-icons/pi";
import { CartContext } from '../CartContext';
import { TfiSearch } from "react-icons/tfi";


const Navbar = () => {
// get cart from context
const { cart } = useContext(CartContext); 

 const [searchItem, setsearchItem] = useState("");

 // Filter users based on search term
  const filteredUsers = products.filter(item =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  )
  
  return (
    <nav className="navbar">
      {/* -----------------LOGO----------- */}
      <div className="logo">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" />
      </div>

      {/* ----------------SearchBar------------ */}
      <div className="searchbar">
        <TfiSearch className="search-icon" />
        <input type="search" placeholder='Search for    products,    brands and more...' value={searchItem} 
          onChange={(e) => setsearchItem(e.target.value)}
          className="search-input"
       />
      </div>

      {/* <div className="searchbar">
        <TfiSearch className="search-icon" />
          <input
          type="search"
          placeholder="Search for products,brands and more..."
          className="search-input"
        />
      </div> */}

      {/*--------------Drop-Down-----------------*/}
      <label for="category">Choose a category:</label>
      <select id="category" name="category">
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>      

      {/*------------- LoginBtn -------------- */}
      <div className='Login'>
       <MdOutlineAccountCircle className="account"/>
       <span className='lbtn'>Login</span>
      </div>


      {/* ---------------Selleer --------- */}
      <div className="seller">
        <PiStorefront className='seller_icon'/>
        <span className='seller_para'>Become a seller</span>
      </div>

      {/*------------- Cart Button -----------------*/}
      <div className="cart">
        <PiShoppingCartBold className='cart_icon' />
        <span className="cart-count">{cart.length}</span>
      </div>
    </nav>
  )
}

export default Navbar;
