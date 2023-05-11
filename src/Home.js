import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import  {Navbar}  from './Navbar'


export const Home = () => {
  let items = useSelector(store => store.itemStore.items)
  let [search,setSearch]=useState('')
  let [filteredResult,setFilteredResult]=useState([])
  // console.log(items)
  let dispatch = useDispatch()
  useEffect(() => {
    loadData()
      .then(data => 
      
         dispatch({ type: "LOAD_DATA", payload: data })
      )
      filterProduct()
      
  
  }, [search] )
const loadData = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .catch(err => console.log(err))
}
const filterProduct = ()=>{
  setFilteredResult(items.filter(item=>item.title.toLowerCase().match(search.toLowerCase( )) ))
}
return (
  <div>
    <Navbar home/>
    <form   className='w-75 p-4 m-auto'>
      <input type={'search'} placeholder='enter your search here' className='form-control' onChange={e=>setSearch(e.target.value)}> 
       </input>
    </form>
    <div className='container-fluid'>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredResult.map(item => {
          return <Card item={item}/>
        })}

      </div>
    </div>
  </div>
)
}
