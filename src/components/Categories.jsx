import React, { useEffect} from 'react'

const Categories = ({categories,setCategories,setCategory}) => {
    const handleCategoryChange = (e) =>{
     
        setCategory(e.target.value)
    }
    const fetchCategories = async() =>{
       
        const res = await  fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json()
        setCategories(data)
        
    }
    useEffect(()=>{
        fetchCategories()
    },[])
  return (
   <div className='my-5 text-center px-5'>
   
     <select className='lg:w-1/2  w-full mx-auto p-2 cursor-pointer border-2 rounded-lg outline-none' onChange={handleCategoryChange}>
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
