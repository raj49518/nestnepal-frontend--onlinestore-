import React from 'react'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import { Cart } from './Cart'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { ProductDetails } from './ProductDetails'
import { Card } from './Card'
export const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/' element={<Navbar/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/card' element={<Card/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
