import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate()
  const {id, title, price, image,category } = product

  return (
    <div className='lg:w-1/4 md:w-1/2 w-full p-5' onClick={()=>navigate(`/products/${id}`)}>
      <div className='rounded-lg p-3 product cursor-pointer hover:scale-105'>

        <img src={image} alt={title} className='object-contain h-56 mx-auto mb-5' />
        <p className='text-sm text-gray-500 font-semibold'>{category}</p>
        <h2 className='text-lg font-bold my-1'>{title.slice(0,25)}</h2>
        <h2 className=' text-green-500 font-bold'>Price: ₹{price}</h2>


      </div>
    </div>
  )
}

export default Product
