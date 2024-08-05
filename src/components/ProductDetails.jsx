import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Loader from './Loader'

const ProductDetails = () => {
    const [product,setProduct] = useState(null)
    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    useEffect(()=>{
        
        const fetchProduct = async() =>{
            
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
            setLoading(false)
        }
        fetchProduct()
    },[id])
    if(loading){
        return <Loader/>
    }

    if(!product){
      return <Navigate to={"/"}/>
    }
  return (
    <div className='container mx-auto flex flex-wrap my-24 px-5'>
      <div className='lg:w-1/2 w-full'>
        <img src={product.image} alt={product.title} className='mx-auto p-5 w-96' />
      </div>
      <div className='lg:w-1/2 w-full flex flex-col items-start gap-3'>
        <h1 className='text-3xl font-bold'>{product.title}</h1>
        <p>{product.description}</p>
        <p >₹ {product.price}</p>
        <button className='px-4 py-2 bg-green-500 text-white rounded-lg'>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDetails
