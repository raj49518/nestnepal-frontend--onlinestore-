import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({item}) => {
    console.log(item)
    return (
        <>
            <div className="col">
                <div className="card">
                    <div className='img-div p-3' style={{height:"200px"}}>
                    <img src={item.image} className="card-img-top h-100" alt={item.title} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-truncate">{item.title}</h5>
                        <h5 className="card-title"> ${item.price}</h5>

                        <Link to={`/product/${item.id}`} className='btn btn-warning w-100'>View Details</Link>

                        
                    </div>
                </div>
            </div>
           
            
        </>

    )
}
