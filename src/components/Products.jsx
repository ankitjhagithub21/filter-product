import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import Product from "./Product"
const Products = () => {
  const [products,setProducts] = useState([])
  

  useEffect(()=>{
    const fetchProducts = () =>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }
    fetchProducts()
  },[])
  if(products.length==0){
    return <Loader/>
  }
  return (
    <div className='flex flex-wrap container mx-auto my-12'>
      {
        products.map((product)=>{
          return <Product key={product.id} product={product}/>
        })
      }
    </div>
  )
}

export default Products
