import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Card } from './Card'
import { Navbar } from './Navbar'

export const Cart = () => {
    const cartStore = useSelector(store=>store.cartStore)
    const cart_items =cartStore.cart_items
    const dispatch=useDispatch()

    console.log(cart_items)
    const handleRemove=(id)=>e=>{
        e.preventDefault()
        dispatch({type:"REMOVE_ITEM",payload:id})
        Swal.fire('Item removed from cart')
    }

  return (
    <>
    <Navbar cart/>
    <div className='container p-5'>
        
        {
            cartStore  && cart_items.length>0 ? 
        
        <table className='table table-hover text-center align-middle table-bordered'>
            <thead>
                <tr className='table-dark'>
                    <th>S.NO.</th>
                    <th>Product Image</th>
                    <th>Product Information</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart_items && cart_items.map(cart_items,i=>{
                        return <tr key={cart_items.id}>
                            <td>{i+1}</td>
                            <td>
                                <img src={cart_items.item.image} alt={cart_items.item.title} style={{height:"100px"}}/>
                            </td>
                            <td>
                                <h3>{cart_items.items.title}</h3>
                                <h3>${cart_items.items.price}</h3>

                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={handleRemove(cart_items.id)}>Remove</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table> 
        :
        <div className='alert alert-danger text-center'>No items in cart.</div> 
            }
    </div>
    </>
  )
}
