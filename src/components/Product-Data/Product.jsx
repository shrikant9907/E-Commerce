import React from 'react'
import { items } from './Data'
import './product.css'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
        <div className="container my-5">
            <div className="row">
                {
                    items.map((Product)=>{
                        return(
                            <>
                            <div className="col-lg-4 col-md-6 my-3 text-center">
                            <div className="card" style={{width:'18rem'}}>
                               <Link to={`/product/${Product.id}`} 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItem: 'center'
                                }}
                               >
                                    <img src={Product.imgSrc} className="card-img-top" style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'60%'}} alt="..." />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{Product.title}</h5>
                                    <p className="card-text">{Product.description}</p>
                                     <button className='btn btn-primary mx-3'>{Product.price}{" "}₹</button>
                                     <button className='btn btn-warning'>Add To Cart</button>
                                </div>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Product
