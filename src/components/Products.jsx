import React, { useEffect } from 'react'
import Loader from "./Loader"
import Product from "./Product"
const Products = ({ products, setProducts, category }) => {

  useEffect(() => {
    const fetchProducts = () => {
      let url;
      if (category == "all") {
        url = "https://fakestoreapi.com/products"
      } else {
        url = `https://fakestoreapi.com/products/category/${category}`
      }
      fetch(url)
        .then(res => res.json())
        .then(json => setProducts(json))
    }
    fetchProducts()
  }, [category])
  if (products.length == 0) {
    return <Loader />
  }
  return (
    <div className='flex flex-wrap container mx-auto my-12'>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Products
