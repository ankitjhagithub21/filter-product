import React, { useEffect } from 'react'
import Loader from "./Loader"
import Product from "./Product"
const Products = ({ products, setProducts, category,setLoading,loading }) => {

  useEffect(() => {
    const fetchProducts = async() => {
      setLoading(true)
      let url;
      if (category == "all") {
        url = "https://fakestoreapi.com/products"
      } else {
        url = `https://fakestoreapi.com/products/category/${category}`
      }
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
        setLoading(false)
    }
    fetchProducts()
  }, [category])
  
  if (loading) {
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
