import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  return (
    <div className='container mx-auto flex flex-wrap my-24'>
      <div className='lg:w-1/2 w-full'>
        <img src={product.image} alt="" width={300} className='mx-auto' />
      </div>
      <div className='lg:w-1/2 w-full'>
        <h1 className='text-3xl font-bold'>{product.title}</h1>
        <p>{product.description}</p>
        <p >₹ {product.price}</p>
      </div>
    </div>
  )
}

export default ProductDetails
