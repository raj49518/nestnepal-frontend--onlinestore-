import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from './Navbar'
import Swal from 'sweetalert2'

export const ProductDetails = () => {
    let[product,setProduct] = useState({})
    let items =useSelector(store=>store.itemStore.items)
    // const params = useParams()
    // const id = params.id

    const {id} = useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
      loadProduct()
      .then(data=>setProduct(data))
     },[id])
    // console.log(product)
    const loadProduct =async()=>{
        // console.log(items, id)
        return await items.find(item=>item.id== id)
    }
const addtoCart=()=>{
    let cart_item={
        id:Date.now()+Math.round(Math.random()*1E5),
        item: product
    }
    dispatch({type:'ADD_TO_CART', payload: cart_item})
    Swal.fire("Item added to Cart")
}

  return (
    <div>
        <Navbar/>
        <div className='container m-5 m-auto d-flex'>
            <div className='w-50 p-5'>
                <img src={product.image} alt={product.title} className='w-100'/>
            </div>
            <div className=' w-50 p-5'>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <h4>Category: {product.category}</h4>
                {product && product.rating &&<>   
                    <h4>In Stock: {product.rating.count}</h4>
                <h4>Rating:{product.rating.rate}</h4>
                
                </>}
                
                <p>Description:{product.description}</p>
                <button className='w-100 btn btn-warning' onClick={addtoCart}>Add to Cart</button>
            </div>

        </div>



    </div>
  )
}
