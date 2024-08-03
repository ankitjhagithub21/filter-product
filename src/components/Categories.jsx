import React, { useEffect, useState } from 'react'

const Categories = ({categories,setCategories}) => {
   
    const fetchCategories = () =>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setCategories(json))
    }
    useEffect(()=>{
        fetchCategories()
    },[])
  return (
   <div className='my-5 text-center'>
   
     <select className='w-1/2 mx-auto p-2 cursor-pointer border-2 rounded-lg outline-none'>
        <option value="all">All</option>
     {
        categories.map((category,index)=>{
            return <option key={index} value={category} className='cursor-pointer'>{category}</option>
        })
     }
    </select>
   </div>
  )
}

export default Categories
