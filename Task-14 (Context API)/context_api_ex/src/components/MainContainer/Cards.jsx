import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import './Card.css'; 
import {CartContext}  from '../CartContext';

const Cards = () => {
  const [products, setProducts] = useState([])

  // get cart context
  const { cart, setCart } = useContext(CartContext)



  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // add product to cart
  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className='card_container'>
      {products.map((item) => (        
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} className="card-img" />
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.description.slice(0, 80)}...</p>
          <p className="card-price">₹{item.price}</p>

          
          <button className="Add-cart" onClick={() => addToCart(item)}>Add To Cart</button>
     
          <button className="buy-now">Buy Now</button>

          
        </div>
      ))}
    </div>
  )
}

export default Cards;
