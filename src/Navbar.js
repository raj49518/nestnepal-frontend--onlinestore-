import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = ({home,cart}) => {
  const cartStore = useSelector(store=>store.cartStore)
  const cart_items =cartStore.cart_items
  const cart_length = cart_items.length


  return (
    <div>
         <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
      <li className="nav-item">
        {
          home ?
        <Link to="/" className="nav-link active" aria-current="page">Home</Link>:
        <Link to="/" className="nav-link">Home</Link>
}
</li>
<li className="nav-item">
{
  cart ?
  <Link to="/cart" className="nav-link active position-relative" aria-current="page">Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart_length}
    <span class="visually-hidden">unread messages</span>
  </span></Link>:
  <Link to="/cart" className="nav-link position-relative">Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart_length}
  <span class="visually-hidden">unread messages</span>
</span></Link>
}
</li>
      


        
      </ul>
    </header>
  </div>

    </div>
  )
}
